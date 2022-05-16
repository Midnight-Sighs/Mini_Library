import Request from './Api';
import PaintBrandData from '../../Helpers/JSON/SeedData/paintBrands.json';

const getPaintBrands=async(props)=>{
    return(
        Request({
            url:'',
            data: props,
            test: {data: PaintBrandData},
        })
    );
};

const PaintBrands={
    getPaintBrands,
};

export default PaintBrands;