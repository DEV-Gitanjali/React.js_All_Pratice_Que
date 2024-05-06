
import React, { useEffect, useState } from 'react'

const useFetch=(url , options={method:"GET"}) => {
    const [data, setData] = useState(null);
    const [loading , setLoading]=useState(false);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const fetchData=async ()=>{
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url, {...options});
                if (!response.ok) {
                    throw new Error("Newwork response was not ok");
                }
                const result = await response.json();
                setData(result);

            
            } catch (error) {
                setError(error);
            }  finally{
                setLoading(false);
            }
        }

        if(url){
            fetchData();
        }
                
        
         
    } , [url]);

    return {data, loading, error};

}

export default useFetch;