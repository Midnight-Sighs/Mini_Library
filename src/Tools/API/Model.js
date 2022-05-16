import Request from './Api';
import ModelData from '../../Helpers/JSON/SeedData/modelSeed.json';

const getModels=async(props)=>{
    return(
        Request({
            url:'',
            data: props,
            test: {data: ModelData}
        })
    );
};

const Models={
    getModels,
}

export default Models;