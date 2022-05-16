import Request from './Api';
import UserData from '../../Helpers/JSON/SeedData/userSeed.json'

const getUsers= async(props)=>{
    return(
        Request({
            url: '',
            data: props,
            test: {data: UserData},
        })
    )
}

const Users ={
    getUsers,
}

export default Users;