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

const RoomUpdateModal = ({ id }: { id: string }) => {
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
          <DialogTitle className="text-center">Edit Room</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="max-h-[80vh] overflow-auto">
          <div>
            <RoomUpdateForm id={id} onClose={handleClose} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoomUpdateModal;

import { Button } from '@/components/ui/button';
import {
  useGetRoomQuery,
  useUpdateRoomMutation,
} from '@/redux/features/room/roomApi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

type FormValues = {
  roomName: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string;
  coverImage: string;
  images: string;
};

const RoomUpdateForm = ({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) => {
  const { data: roomData, isLoading: isRoomLoading } = useGetRoomQuery(id);
  const room = roomData?.data;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const [updateRoom] = useUpdateRoomMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const toastId = toast.loading('Loading...');
    try {
      const updatedRoomData = {
        roomName: data.roomName || room.roomName,
        roomNo: data.roomNo || room.roomNo,
        floorNo: data.floorNo || room.floorNo,
        capacity: data.capacity || room.capacity,
        pricePerSlot: data.pricePerSlot || room.pricePerSlot,
        amenities: data.amenities
          ? data.amenities.split(',')
          : room.amenities,
        coverImage: data.coverImage || room.coverImage,
        images: data.images ? data.images.split(',') : room.images,
      };

      await updateRoom({
        id,
        data: updatedRoomData,
      });

      toast.success('Room has been updated!', {
        id: toastId,
        duration: 2000,
      });
      reset();
      onClose();
    } catch (error) {
      console.log('Error updating room!', error);
      toast.error('Something went wrong while updating the room!', {
        id: toastId,
        duration: 2000,
      });
    }
  };

  if (isRoomLoading) {
    return <LoadingSpinner />;
  }
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {/* Room Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="roomName">Room Name</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.roomName ? 'border-red-500' : 'border-gray-300'
                }`}
                type="text"
                id="roomName"
                defaultValue={room?.roomName}
                placeholder="Enter room name"
                {...register('roomName', {
                  required: 'Room name is required',
                })}
              />
              {errors.roomName && (
                <p className="text-sm text-red-500">
                  {errors.roomName.message}
                </p>
              )}
            </div>

            {/* Room No */}
            <div className="flex flex-col gap-2">
              <label htmlFor="roomNo">Room No</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.roomNo ? 'border-red-500' : 'border-gray-300'
                }`}
                type="number"
                id="roomNo"
                defaultValue={room?.roomNo}
                placeholder="Enter room number"
                {...register('roomNo', {
                  required: 'Room number is required',
                  valueAsNumber: true,
                })}
              />
              {errors.roomNo && (
                <p className="text-sm text-red-500">
                  {errors.roomNo.message}
                </p>
              )}
            </div>

            {/* Floor No */}
            <div className="flex flex-col gap-2">
              <label htmlFor="floorNo">Floor No</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.floorNo ? 'border-red-500' : 'border-gray-300'
                }`}
                type="number"
                id="floorNo"
                defaultValue={room?.floorNo}
                placeholder="Enter floor number"
                {...register('floorNo', {
                  required: 'Floor number is required',
                  valueAsNumber: true,
                })}
              />
              {errors.floorNo && (
                <p className="text-sm text-red-500">
                  {errors.floorNo.message}
                </p>
              )}
            </div>

            {/* Capacity */}
            <div className="flex flex-col gap-2">
              <label htmlFor="capacity">Capacity</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.capacity ? 'border-red-500' : 'border-gray-300'
                }`}
                type="number"
                id="capacity"
                defaultValue={room?.capacity}
                placeholder="Enter capacity"
                {...register('capacity', {
                  required: 'Capacity is required',
                  valueAsNumber: true,
                })}
              />
              {errors.capacity && (
                <p className="text-sm text-red-500">
                  {errors.capacity.message}
                </p>
              )}
            </div>

            {/* Price Per Slot */}
            <div className="flex flex-col gap-2">
              <label htmlFor="pricePerSlot">Price Per Slot</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.pricePerSlot
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                type="number"
                id="pricePerSlot"
                defaultValue={room?.pricePerSlot}
                placeholder="Enter price per slot"
                {...register('pricePerSlot', {
                  required: 'Price per slot is required',
                  valueAsNumber: true,
                })}
              />
              {errors.pricePerSlot && (
                <p className="text-sm text-red-500">
                  {errors.pricePerSlot.message}
                </p>
              )}
            </div>

            {/* Amenities */}
            <div className="flex flex-col gap-2">
              <label htmlFor="amenities">Amenities</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.amenities ? 'border-red-500' : 'border-gray-300'
                }`}
                type="text"
                id="amenities"
                defaultValue={room?.amenities}
                placeholder="Enter amenities (comma-separated)"
                {...register('amenities', {
                  required: 'Amenities are required',
                })}
              />
              {errors.amenities && (
                <p className="text-sm text-red-500">
                  {errors.amenities.message}
                </p>
              )}
            </div>

            {/* Cover Image */}
            <div className="flex flex-col gap-2">
              <label htmlFor="coverImage">Cover Image URL</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.coverImage ? 'border-red-500' : 'border-gray-300'
                }`}
                type="text"
                id="coverImage"
                defaultValue={room?.coverImage}
                placeholder="Enter cover image URL"
                {...register('coverImage', {
                  required: 'Cover image URL is required',
                })}
              />
              {errors.coverImage && (
                <p className="text-sm text-red-500">
                  {errors.coverImage.message}
                </p>
              )}
            </div>

            {/* Images */}
            <div className="flex flex-col gap-2">
              <label htmlFor="images">Images URLs</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.images ? 'border-red-500' : 'border-gray-300'
                }`}
                type="text"
                id="images"
                defaultValue={room?.images}
                placeholder="Enter image URLs (comma-separated)"
                {...register('images', {
                  required: 'Images are required',
                })}
              />
              {errors.images && (
                <p className="text-sm text-red-500">
                  {errors.images.message}
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
