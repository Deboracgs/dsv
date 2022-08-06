import axios from "axios";
import {
  getUsers,
  getUsersError,
  getUsersSuccess
} from "./../reducers";
import {
  AppThunk,
  IDispatch,
  IUser,
} from "./../../typings";
import { convertAndFilterUsers } from "./../../utils";


export const getUsersRequest =
  (): AppThunk =>
  async (
    dispatch: IDispatch<unknown, IUser[] | unknown | string>
  ) => {
    dispatch(getUsers());
    axios.get("https://api.npoint.io/8a1cd9800ffb77499aa8")
      .then((response: any) => {
        const usersMapped = convertAndFilterUsers(response.data.users)
        dispatch(getUsersSuccess(usersMapped))
      })
      .catch((error: string) =>  dispatch(getUsersError(error)))
  };
