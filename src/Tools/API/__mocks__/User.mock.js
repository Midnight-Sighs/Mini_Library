import Request from './Api';
import UserData from '../../../Helpers/JSON/SeedData/userSeed.json'

const getUsers= async(props)=>{
    return(
        Request({
            data: UserData,
        })
    )
}

const Users ={
    getUsers,
}

export default Users;