import axios from 'axios';

const Request = async(props)=>{

    //mock api - for testing and before backend
    if(props.test){
        return new Promise(resolve =>{
            const data = props.test;
            setTimeout(()=>{
                resolve(data);
            }, Math.random() * 20);
        });
    }

}

export default Request;