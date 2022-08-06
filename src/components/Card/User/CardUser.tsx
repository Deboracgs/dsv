import React from "react";
import { Card, CardContent } from "@mui/material";
import { IUser } from "./../../../typings";
import { CardUserStyled, UserAddressStyled, UserCompanyStyled, UserInfoStyled } from "./CardUser.styled";
import {Button} from "./../../index";

export interface CardUserProps {
  id: string;
  onRemove?: (value: string) => void;
  onRestore?: (value: string) => void;
  user: IUser;
}

const CardUser = ({
  id,
  onRemove,
  onRestore,
  user
}: CardUserProps): React.ReactElement => {
  const onClick = () => {
    if(user.deleted){
      if (typeof onRestore === "function") onRestore(id);
    }else{
      if (typeof onRemove === "function") onRemove(id);
    }
    
  };

  const text = user.deleted ? "Restore" : "Remove";
  return (
    <CardUserStyled data-testid={`card-user-${id}`}>
      <Card>
        <CardContent>
          <UserInfoStyled variant="h6">{user.username} - {user.age} </UserInfoStyled>
          <UserCompanyStyled variant="subtitle1">{user.companyName}</UserCompanyStyled>
          <UserAddressStyled variant="subtitle2">{user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}</UserAddressStyled>
          <Button id={`${text}-user${id}`} label={`${user.deleted ? "Restore" : "Remove"} User`} variant="outlined" onClick={() => onClick()} />
        </CardContent>
      </Card>
    </CardUserStyled>
    
  );
};

CardUser.defaultProps = {
  onRemove: undefined,
  onRestore: undefined
};
export default CardUser;
