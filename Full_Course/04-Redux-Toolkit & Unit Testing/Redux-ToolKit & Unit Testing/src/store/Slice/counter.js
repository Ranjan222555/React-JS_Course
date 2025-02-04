import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countValue: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    IncreaseCountAction: (state, actions) => {
      state.countValue += 1;
      // console.log(state, actions.payload);
    },
  },
});

export const { IncreaseCountAction } = CounterSlice.actions;

export default CounterSlice.reducer;
