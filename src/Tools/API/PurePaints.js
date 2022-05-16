import Request from './Api';
import PurePaintData from '../../Helpers/JSON/SeedData/purePaintSeed.json';

const getPurePaints=async(props)=>{
    return(
        Request({
            url:'',
            data: props,
            test: {data: PurePaintData},
        })
    );
};

const PurePaints={
    getPurePaints,
};

export default PurePaints;