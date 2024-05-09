import { useMemo  , useRef} from "react";
import useIntersectionObserver from "../hooks/use-intersection-observer";


const IntersecctionElement=()=>{

    const ref=useRef(null);

    const opations=useMemo(()=>({
          root:null,
          rootMargin:"0px",
          threshold:0.5,
          
    }) ,[])


    const intersectionEntry= useIntersectionObserver(ref, opations);
    console.log("intersecting" , intersectionEntry ?. intersecting);
    console.log("intersecting Ratio" , intersectionEntry ?. isIntersectionRatio);



    return(

          <div  style={{height:"200vh", background:intersectionEntry?. intersecting? "white " :  "grey"}}>


            <div style={{height:"40vh" , background:"lightblue"}}>
                <h2>Hello world</h2>
            </div>
          </div>

    )
}


export default IntersecctionElement;