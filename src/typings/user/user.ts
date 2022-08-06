import { IGeo } from "./../";


export interface IAddressUser {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: IGeo;
}

export interface IUser {
  id: string | number;
  username: string;
  age: number;
  companyName: string;
  address: IAddressUser;
  deleted: boolean;
}
