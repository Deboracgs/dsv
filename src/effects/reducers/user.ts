import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IUser,
  IUserReducer,
  onSearchUserPayload,
} from "./../../typings";
import { RootState } from "./../store";

const initialState: IUserReducer = {
  loading: true,
  errorMessage: null,
  successMessage: null,
  users: [],
  originalUsers: [],
  searchUsersList: [],
  onSearch: false
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state: IUserReducer) => {
      state.loading = true;
    },
    getUsersSuccess: (
      state: IUserReducer,
      { payload }: PayloadAction<IUser[]>
    ) => {
      state.loading = false;
      state.users = payload;
      state.originalUsers = payload;
      state.searchUsersList = payload;
    },
    getUsersError: (state: IUserReducer, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload;
      state.loading = false;
    },
    updateUsers: (
      state: IUserReducer,
      { payload }: PayloadAction<IUser[]>
    ) => {
      state.users = payload;
      state.originalUsers = payload;
    },
    updateSearchUsers: (
      state: IUserReducer,
      { payload }: PayloadAction<IUser[]>
    ) => {
      state.searchUsersList = payload;
    },
    searchUsers: (
      state: IUserReducer,
      { payload }: PayloadAction<onSearchUserPayload>
    ) => {
      state.users = payload.users;
      state.searchUsersList = payload.users
      state.onSearch = payload.onSearch
    },
  }
});

export const {
  getUsers,
  getUsersSuccess,
  getUsersError,
  updateUsers,
  searchUsers,
  updateSearchUsers
} = userReducer.actions;

export const userSelector = (state: RootState): IUserReducer => state.user;
export default userReducer.reducer;
