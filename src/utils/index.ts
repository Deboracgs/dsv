import { IUser } from "./../typings";

const generateRandomId = (): string => {
    const length = 6;
    let result = '';
    const characters       = 'ABCDEF123456';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const convertAndFilterUsers = (users: any[]): IUser[] => {
    const convertedUsers = users.map((user) => {
        return {
            address: user.address,
            age: user.age,
            companyName: user.company.name,
            id: generateRandomId(),
            username: user.username,
            deleted: false
        }
    })

    const filteredUsers = convertedUsers.filter((user) => user.age >= 18);

    // eslint-disable-next-line array-callback-return
    const ascUsers = filteredUsers.sort(function (user1: IUser, user2: IUser): any {
        if(user1.age > user2.age) return 1;
        if(user1.age < user2.age) return -1;
        if(user1.companyName > user2.companyName) return 1;
        if(user1.companyName < user2.companyName) return -1;
    })

    return ascUsers
}