import Request from './Api';
import ModelCommentData from '../../Helpers/JSON/SeedData/modelCommentSeed.json';

const getModelComments=async(props)=>{
    return(
        Request({
            url: '',
            data: props,
            test: {data: ModelCommentData}
        })
    );
};

const ModelComments = {
    getModelComments,
};

export default ModelComments;
