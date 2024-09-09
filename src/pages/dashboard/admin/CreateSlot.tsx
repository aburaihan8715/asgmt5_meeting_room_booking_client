import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import SectionHeading from '@/components/ui/SectionHeading';
import { useGetAllRoomsQuery } from '@/redux/features/room/roomApi';
import { useCreateSlotIntoDBMutation } from '@/redux/features/slot/slotApi';
import { TRoom } from '@/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

type FormValues = {
  room: string;
  date: string;
  startTime: string;
  endTime: string;
};

export type TRoomOptions = {
  label: string;
  value: string;
};

const CreateSlot = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const watchStartTime = watch('startTime');

  const { data: roomsData, isLoading: isRoomsLoading } =
    useGetAllRoomsQuery({});

  const [createSlotIntoDB] = useCreateSlotIntoDBMutation();

  const roomsOptions: TRoomOptions[] = roomsData?.data.map(
    (item: TRoom) => {
      return {
        label: item?.roomName,
        value: item?._id,
      };
    }
  );

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const toastId = toast.loading('Loading...');
    try {
      const slotData = data;
      await createSlotIntoDB(slotData);
      toast.success('Slot has been created!', {
        id: toastId,
        duration: 2000,
      });
      reset();
    } catch (error) {
      console.log(error);
      toast.error('Something wrong while creating slot!', {
        id: toastId,
        duration: 2000,
      });
    }
  };

  // Helper function to check time difference
  const isEndTimeValid = (startTime: string, endTime: string) => {
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);

    const startTimeInMinutes = startHours * 60 + startMinutes;
    const endTimeInMinutes = endHours * 60 + endMinutes;

    return endTimeInMinutes - startTimeInMinutes >= 60; // Ensures at least 60 minutes difference
  };

  if (isRoomsLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <div className="flex justify-center">
        <SectionHeading heading="Create Slot" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-1 space-y-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {/* Room Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="room">Room</label>
              <select
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.room ? 'border-red-500' : 'border-gray-300'
                }`}
                id="room"
                {...register('room', { required: 'Room is required' })}
              >
                <option value="">Select a room</option>
                {roomsOptions?.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              {errors.room && (
                <p className="text-sm text-red-500">
                  {errors.room.message}
                </p>
              )}
            </div>

            {/* Date Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="date">Date</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
                type="date"
                id="date"
                {...register('date', { required: 'Date is required' })}
              />
              {errors.date && (
                <p className="text-sm text-red-500">
                  {errors.date.message}
                </p>
              )}
            </div>

            {/* Start Time Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="startTime">Start Time</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.startTime ? 'border-red-500' : 'border-gray-300'
                }`}
                type="time"
                id="startTime"
                {...register('startTime', {
                  required: 'Start time is required',
                })}
              />
              {errors.startTime && (
                <p className="text-sm text-red-500">
                  {errors.startTime.message}
                </p>
              )}
            </div>

            {/* End Time Field with Custom Validation */}
            <div className="flex flex-col gap-2">
              <label htmlFor="endTime">End Time</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.endTime ? 'border-red-500' : 'border-gray-300'
                }`}
                type="time"
                id="endTime"
                {...register('endTime', {
                  required: 'End time is required',
                  validate: (value) =>
                    isEndTimeValid(watchStartTime, value) ||
                    'End time must be at least 1 hour after the start time',
                })}
              />
              {errors.endTime && (
                <p className="text-sm text-red-500">
                  {errors.endTime.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateSlot;
