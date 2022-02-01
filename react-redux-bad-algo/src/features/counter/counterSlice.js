import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

function expensive() {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  return +sum.toString()[0];
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      state.value += expensive();
    }
  }
});

export const { increment } = counterSlice.actions;

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
