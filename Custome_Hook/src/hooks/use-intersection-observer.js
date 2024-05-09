import { useEffect, useState } from "react";



const  useIntersectionObserver=(ref, options)=>{

    const [useIntersectionObserverEntry , setIntersectionObserverEntry]=useState(null)

     useEffect(()=>{
        if(ref.current &&  typeof IntersectionObserver === "function"){
             
                const handler = (entries)=>{
                    setIntersectionObserverEntry(entries[0]);
                }
             


            const observer = new IntersectionObserver(handler , options);
            observer.observe(ref.current);


            return ()=>{
                setIntersectionObserverEntry(null);
                observer.disconnect();

            }
        }

     } , [ref , options])

     return useIntersectionObserverEntry;

}

export default useIntersectionObserver;