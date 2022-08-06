import { configureStore, AnyAction } from "@reduxjs/toolkit";
import thunk, { ThunkAction } from "redux-thunk";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(thunk),
  devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export default  store;
