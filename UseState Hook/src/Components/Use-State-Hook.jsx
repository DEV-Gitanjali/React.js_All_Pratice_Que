import React, { useState } from 'react'

const UseStateHook = () => {

  const [count , setcount] = useState(0);

  return (
    <div> 
      <>UseStateHook</>

      <span>
      Count:{count}
      </span>
      <button  onClick={()=>setcount(count+1)}>increment</button>
      <button  onClick={()=>setcount((prev) => prev + 1)}>increment</button>


      
    </div>
  )
}

export default UseStateHook
