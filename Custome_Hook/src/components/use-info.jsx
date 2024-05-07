import useLocalStorage from "../hooks/use-local-storage";

const UseInfo=()=>{
    const [value , set , remove] = useLocalStorage("username" , "Guest")

    const handleLogout=()=>{
        set("");
        remove()
    }

    return (

        <div>

        <h3>hello</h3>
        <input type="text"  placeholder="Enter your name"
         value={value} 
         onChange={(e)=>set(e.target.value)} />

        <button onClick={handleLogout}>Logout</button>
         </div>
    )

}

export default UseInfo;
