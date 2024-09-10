import { Button } from '@/components/ui/button';

import { useNavigate, useParams } from 'react-router-dom';
import { useGetAllSlotsQuery } from '@/redux/features/slot/slotApi';
import { TSlot } from '@/types/slotData.type';
import DatePicker from 'react-datepicker';
import { MultiSelect } from 'react-multi-select-component';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { createBooking } from '@/redux/features/booking/bookingSlice';
import { useGetRoomQuery } from '@/redux/features/room/roomApi';
import { useCreateBookingIntoDBMutation } from '@/redux/features/booking/bookingApi';
import ErrorMessage from '@/components/ui/ErrorMessage';

const BookingProcess = () => {
  const { roomId } = useParams();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlots, setSelectedSlots] = useState<
    { label: string; value: string }[]
  >([]);
  const user = useAppSelector((state) => state.auth.user);
  const [createBookingIntoDB] = useCreateBookingIntoDBMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    data: allSlotsData,
    isLoading: allSlotDataLoading,
    isError: allSlotDataError,
  } = useGetAllSlotsQuery({ room: roomId });
  const { data: roomData, isLoading: roomLoading } =
    useGetRoomQuery(roomId);

  const uniqueDates = [
    ...new Set(allSlotsData?.data?.map((item: TSlot) => item.date)),
  ];

  const allowedDates = uniqueDates.map((date) => new Date(`${date}`));

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-CA')
    : null;

  const { data: filteredSlotsData } = useGetAllSlotsQuery(
    {
      room: roomId!,
      date: formattedDate!,
    },
    {
      skip: !roomId || !formattedDate,
    }
  );

  const slots: TSlot[] = filteredSlotsData?.data || [];

  const slotOptions = slots?.map((slot) => {
    return {
      label: `${slot.startTime} - ${slot.endTime}`,
      value: slot?._id,
    };
  });

  const handleBooking = async () => {
    const bookingDataForRedux = {
      date: moment(selectedDate).format('YYYY-MM-DD'),
      slots: selectedSlots.map((item) => item?.value),
      slotTime: selectedSlots.map((item) => item?.label),
      room: roomId,
      roomName: roomData?.data?.name,
      user: user?._id,
      cost: roomData?.data?.pricePerSlot * selectedSlots?.length,
    };
    const bookingDataForDB = {
      date: moment(selectedDate).format('YYYY-MM-DD'),
      slots: selectedSlots.map((item) => item?.value),
      room: roomId,
      user: user?._id,
    };
    await createBookingIntoDB(bookingDataForDB);
    dispatch(createBooking(bookingDataForRedux));
    navigate('/checkout');
  };

  if (allSlotDataLoading || !user || roomLoading) {
    return <LoadingSpinner />;
  }

  if (allSlotDataError) {
    return <ErrorMessage>Error while slot loading.</ErrorMessage>;
  }

  return (
    <section className="min-h-screen">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div className="flex">
          {/* DATE SELECTION */}
          <div className="p-6 sm:p-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Select Booking Date
            </h2>

            <div className="overflow-hidden border rounded w-fit">
              <DatePicker
                dateFormat="yyyy/MM/dd"
                showIcon
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date!)}
                includeDates={allowedDates}
                disabled={allowedDates.length < 1}
                placeholderText={
                  allowedDates.length < 1
                    ? 'Loading...'
                    : 'Select available date'
                }
              />
            </div>
          </div>

          {/* TIME SLOT SELECTION */}
          <div className="p-6 sm:p-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Select available slots
            </h2>

            <MultiSelect
              options={slotOptions}
              disabled={!selectedDate}
              value={selectedSlots}
              onChange={setSelectedSlots}
              labelledBy="Select"
            />
          </div>
        </div>

        {/* USER INFORMATION FORM */}
        <div className="p-6 border-t sm:p-10">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            User Information
          </h2>
          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              defaultValue={user.name}
              disabled
              className="w-full px-4 py-2 text-gray-600 bg-gray-100 border rounded-lg"
            />
            <input
              type="email"
              defaultValue={user.email}
              disabled
              className="w-full px-4 py-2 text-gray-600 bg-gray-100 border rounded-lg"
            />
            <input
              type="tel"
              defaultValue={user.phone}
              disabled
              className="w-full px-4 py-2 text-gray-600 bg-gray-100 border rounded-lg"
            />
            <input
              type="text"
              defaultValue={user.address}
              disabled
              className="w-full px-4 py-2 text-gray-600 bg-gray-100 border rounded-lg"
            />
          </form>
        </div>

        {/* CHECKOUT BUTTON */}
        <div className="flex justify-end p-6 border-t sm:p-10">
          <Button
            disabled={!selectedDate || selectedSlots.length < 1}
            onClick={handleBooking}
          >
            Checkout Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
