import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    departure: "",
    arrival: "",
    departurePlace: null,
    arrivalPlace: null,
    datetime: new Date().toISOString(),
    represents: "departure",
  },
  reducers: {
    changeDeparture(state, action) {
      state.departure = action.payload.entry;
      state.departurePlace = action.payload.place;
    },
    changeArrival(state, action) {
      state.arrival = action.payload.entry;
      state.arrivalPlace = action.payload.place;
    },
    changeDatetime(state, action) {
      state.datetime = action.payload;
    },
    changeRepresents(state, action) {
      state.represents = action.payload;
    },
  },
});

export const {
  changeArrival,
  changeDeparture,
  changeDatetime,
  changeRepresents,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
