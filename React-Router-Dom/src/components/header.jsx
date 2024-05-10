
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    
    <header>
        <NavLink  
        // className={({isActive,isPending, isTransitioning})=>[
        //     isActive ? 'active' :"",
        //     isPending ? 'pending' :"",
        //     isTransitioning ? 'transitioning' :""

        // ]. join("")}

        // style={({isActive,isPending, isTransitioning})=>{
        //     return {
        //         color: isActive? "red" : "black",
        //         fontWeight: isActive? "bold" : "normal",
        //         viewTimeline: isTransitioning? "slide"
        //     };
        // }}

        
          to="/">
          Home
        </NavLink>


        <NavLink to='/posts'> Post</NavLink>
    </header>
  )
}

export default Header
