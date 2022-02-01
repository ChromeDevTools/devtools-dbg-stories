import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: Array.from({ length: 100 }).fill(1)
};

export const labelSlice = createSlice({
  name: "label",
  initialState
});

export const selectData = (state, i) => state.label.data[i];

export default labelSlice.reducer;
