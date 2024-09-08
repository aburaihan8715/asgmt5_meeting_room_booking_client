export interface IRoom {
  roomName: string;
  roomNo: string;
  floorNo: string;
}

export type TSlot = {
  _id: string;
  room: IRoom;
  date: string;
  startTime: string;
  endTime: string;
  isBooked?: boolean;
};
