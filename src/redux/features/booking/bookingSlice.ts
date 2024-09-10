import { createSlice } from '@reduxjs/toolkit';

type TBookingState = {
  date: string;
  room: string;
  roomName: string;
  slots: string[];
  slotTime: string[];
  user: string;
  cost: number;
};

const initialState: TBookingState = {
  date: '',
  room: '',
  roomName: '',
  slots: [],
  slotTime: [],
  user: '',
  cost: 0,
};
export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    createBooking: (state, action) => {
      const { date, room, slots, slotTime, user, cost, roomName } =
        action.payload;

      state.date = date;
      state.room = room;
      state.roomName = roomName;
      state.slots = slots;
      state.slotTime = slotTime;
      state.user = user;
      state.cost = cost;
    },

    clearBooking: (state) => {
      state.date = '';
      state.room = '';
      state.roomName = '';
      state.slots = [];
      state.slotTime = [];
      state.user = '';
      state.cost = 0;
    },
  },
});

export const { createBooking, clearBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
