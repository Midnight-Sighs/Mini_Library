import Request from './Api';
import StatusChartData from '../../Helpers/JSON/SeedData/statusChart.json';

const getStatusChart=async(props)=>{
    return(
        Request({
            url: '',
            data: props,
            test: {data: StatusChartData},
        })
    );
};

const StatusChart={
    getStatusChart,
};

export default StatusChart