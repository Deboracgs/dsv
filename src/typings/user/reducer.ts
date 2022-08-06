import { IUser, Nullable } from "./../../typings";

export interface IUserReducer {
  users: IUser[];
  originalUsers: IUser[];
  searchUsersList: IUser[];
  loading: boolean;
  successMessage: Nullable<string>;
  errorMessage: Nullable<string>;
  onSearch: boolean;
}

export interface onSearchUserPayload {
  users: IUser[];
  onSearch: boolean;
}