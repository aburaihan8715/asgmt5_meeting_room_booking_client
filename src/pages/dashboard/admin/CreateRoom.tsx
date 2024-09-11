import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { useCreateRoomIntoDBMutation } from '@/redux/features/room/roomApi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

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

const CreateRoom = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const [createRoomIntoDB] = useCreateRoomIntoDBMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const toastId = toast.loading('Loading...');
    try {
      const roomData = {
        roomName: data.roomName,
        roomNo: data.roomNo,
        floorNo: data.floorNo,
        capacity: data.capacity,
        pricePerSlot: data.pricePerSlot,
        amenities: data.amenities.split(','),
        coverImage: data.coverImage,
        images: data.images.split(','),
      };
      console.log(roomData);
      await createRoomIntoDB(roomData);
      toast.success('Room has been created!', {
        id: toastId,
        duration: 2000,
      });
      reset();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong while creating the room!', {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <section>
      <div className="flex justify-center">
        <SectionHeading heading="Create Room" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:px-20 px-1 space-y-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5">
            {/* Room Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="roomName">Room Name</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.roomName ? 'border-red-500' : 'border-gray-300'
                }`}
                type="text"
                id="roomName"
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

export default CreateRoom;
