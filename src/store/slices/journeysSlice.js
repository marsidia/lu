import { createSlice } from "@reduxjs/toolkit";

const journeySlice = createSlice({
  name: "journeysMap",
  initialState: {
    currentId: 0,
    currentSection: null,
    currentJourneyDetails: {},
    geos: [],
  },
  reducers: {
    changeCurrentId(state, action) {
      state.currentId = action.payload;
    },
    changeCurrentSection(state, action) {
      state.currentSection = action.payload;
    },
    changeCurrentDetails(state, action) {
      state.currentJourneyDetails = action.payload;
    },
    addGeo(state, action) {
      state.geos.push(action.payload);
    },
  },
});

export const {
  changeCurrentId,
  changeCurrentDetails,
  changeCurrentSection,
  addGeo,
} = journeySlice.actions;
export const journeysReducer = journeySlice.reducer;
