import { combineReducers, Reducer } from "@reduxjs/toolkit";
import {
  ICommonReducer,
  IUserReducer,
} from "./../../typings";

import {
  userReducer,
  commonReducer
} from "./../reducers";

interface IApplicationState {
  user: Reducer<IUserReducer>;
  common: Reducer<ICommonReducer>;
}

const reducers: IApplicationState = {
  user: userReducer.reducer,
  common: commonReducer.reducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
