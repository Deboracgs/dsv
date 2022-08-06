import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsers, userSelector, updateSearchUsers } from "./../../../effects/reducers";
import {CardUser} from "./../../../components";
import { getUsersRequest } from "./../../../effects/actions";
import { IUser } from "./../../../typings";
import { Grid } from "@mui/material";

const ListUser = () => {
    const dispatch = useDispatch();
    const { users, originalUsers, onSearch, searchUsersList } = useSelector(userSelector);


    useEffect(() => { 
        dispatch(getUsersRequest())
    }, [dispatch]);

    const onClickButtonUser = (user: IUser, restore: boolean) => {
        if(onSearch){
        const usersSearchWithRemoved = searchUsersList.map((u) => {
            if(u.id === user.id){
            return {...u, deleted: !restore}
            }
            return u
        })
        dispatch(updateSearchUsers(usersSearchWithRemoved))
        }

        const usersWithRemoved = originalUsers.map((u) => {
        if(u.id === user.id){
            return {...u, deleted: !restore}
        }
        return u
        })
        
        dispatch(updateUsers(usersWithRemoved))
    }



    const usersToShow = () => {
        if(onSearch){
        return searchUsersList
        }else{
        return users.filter(u => u.deleted === false)
        }
    }

    return (
        <div data-testid="list-user">
            <Grid container spacing={2}>
                {usersToShow().map((user, i) => (
                    <Grid item>
                        <CardUser key={user.id} id={i.toString()} user={user} onRemove={() => onClickButtonUser(user, false)} onRestore={() => onClickButtonUser(user, true)} />
                    </Grid>
                ))}
            </Grid>
            
        </div>
    )

}

ListUser.defaultProps = {};
export default ListUser;