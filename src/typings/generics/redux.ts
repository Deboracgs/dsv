import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "effects/store";

export type AppThunk = ThunkAction<void, RootState, null, AnyAction>;

export interface ActionDispatch<T> {
  type: string;
  payload: T;
}

// P = params R = return (success or error)
export type IDispatch<P, R> = ThunkDispatch<RootState, P, ActionDispatch<R>>;
