import { useEffect, useState } from "react";

const  useDebounce = ( value , delay, Callback =()=>{} )=>{
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
            Callback();
        }, delay);

        return ()=> clearTimeout(handler);

        
    }  ,[value , delay])

    return debouncedValue;
}

export default useDebounce;