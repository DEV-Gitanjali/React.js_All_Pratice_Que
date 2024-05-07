import { useState } from "react";
import useDebounce from "../hooks/use-debounce";

const DebounceInput =()=>{

    const [inputText , setInputText] =  useState("")

    const handleInputChange=(event) =>{
        setInputText(event.target.value)
    }
     
    const debouncedValue = useDebounce(inputText, 1000 , ()=>{
        // console.log("function call")
    }) 
    return(

        <div>
            <p>{debouncedValue}</p>
        <input type="text" value={inputText} placeholder="Type something..." 
        onChange={handleInputChange}/>
        </div>
    

    )

}

export default  DebounceInput;