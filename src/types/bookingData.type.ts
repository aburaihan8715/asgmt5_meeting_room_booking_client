import { TRoom } from './roomData.type';
import { TSlot } from './slotData.type';
import { TUser } from './userData.type';

export type TBooking = {
  _id: string;
  room: TRoom;
  slots: TSlot[];
  user: TUser;
  date: string;
  totalAmount: number;
  isConfirmed: 'unconfirmed' | 'confirmed';
};
