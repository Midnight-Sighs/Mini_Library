import Request from './Api';
import GameListData from '../../../Helpers/JSON/SeedData/gameListSeed.json';

const getGameList=async(props)=>{
    return(
        await Request({
            data: GameListData,
        })
    )
}

const GameList = {
    getGameList
};

export default GameList;