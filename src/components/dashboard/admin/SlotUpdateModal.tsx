import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FaPenToSquare } from 'react-icons/fa6';

const SlotUpdateModal = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button onClick={handleOpen}>
          <FaPenToSquare className="text-xl text-primary" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Edit Slot</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="max-h-[80vh] overflow-auto">
          <div>
            <SlotUpdateForm id={id} onClose={handleClose} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SlotUpdateModal;

import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import {
  useGetSlotFromDBQuery,
  useUpdateSlotIntoDBMutation,
} from '@/redux/features/slot/slotApi';

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

const SlotUpdateForm = ({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) => {
  const { data: slotData, isLoading: isSlotLoading } =
    useGetSlotFromDBQuery(id);
  const slot = slotData?.data;

  const [updateSlotIntoDB] = useUpdateSlotIntoDBMutation();

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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const toastId = toast.loading('Loading...');

    try {
      const updatedSlotData = {
        date: data?.date || slot.date,
        startTime: data?.startTime || slot.startTime,
        endTime: data?.endTime || slot.endTime,
        room: data?.room || slot.room._id,
      };
      await updateSlotIntoDB({
        id,
        data: updatedSlotData,
      });
      toast.success('Slot has been created!', {
        id: toastId,
        duration: 2000,
      });
      reset();
      onClose();
    } catch (error) {
      console.log(error);
      toast.error('Something wrong while creating slot!', {
        id: toastId,
        duration: 2000,
      });
    }
  };

  // Helper function to check time difference
  const isEndTimeValid = (
    startTime: string | undefined,
    endTime: string | undefined
  ) => {
    if (!startTime || !endTime) {
      return true;
    }

    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);

    const startTimeInMinutes = startHours * 60 + startMinutes;
    const endTimeInMinutes = endHours * 60 + endMinutes;

    return endTimeInMinutes - startTimeInMinutes >= 60;
  };

  if (isSlotLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5">
            {/* Room Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="room">Room</label>
              <select
                defaultValue={slot.room}
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.room ? 'border-red-500' : 'border-gray-300'
                }`}
                id="room"
                {...register('room', { required: 'Room is required' })}
              >
                <option value={slot.room._id}>
                  {slot?.room?.roomName}
                </option>
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
                defaultValue={slot?.date}
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
                defaultValue={slot?.startTime}
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
                defaultValue={slot?.endTime}
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
