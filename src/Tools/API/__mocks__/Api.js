const Request=async(props)=>{
    return new Promise((resolve, reject)=>{
        const data = props.data
        process.nextTick(()=>
            data ? 
            resolve(data)
            :
            reject({
                error: "No data"
            })
        )
    });
};

export default Request