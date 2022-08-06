import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICommonReducer,
} from "../../typings";
import { RootState } from "../store";

const initialState: ICommonReducer = {
  counter: 0
};

export const commonReducer = createSlice({
  name: "common",
  initialState,
  reducers: {
    updateCounter: (state: ICommonReducer, {payload}: PayloadAction<number>) => {
      state.counter = payload;
    }
  }
});

export const {
  updateCounter
} = commonReducer.actions;

export const commonSelector = (state: RootState): ICommonReducer => state.common;
export default commonReducer.reducer;
