import Request from './Api';
import MixedPaintData from '../../Helpers/JSON/SeedData/mixedPaintSeed.json';

const getMixedPaint=async(props)=>{
    return(
        Request({
            url: '',
            data: props,
            test: {data: MixedPaintData}
        })
    )
};

const MixedPaint = {
    getMixedPaint,
}

export default MixedPaint