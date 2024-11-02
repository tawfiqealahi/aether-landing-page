import './Navbar.css'
import { useState } from "react";
import hamburger from '../../assets/Hamburger.svg'

const Navbar = () => {
    const [logIn,setLogIn]=useState(false);
    const handleLogIn =()=>{
        
        setLogIn(!logIn)
    }

    return (
        <div className="flex justify-between  ">
  <div className='flex'> 
   <div className="text-4xl font-bold ">aether 
   </div>
   <p className='dot text-4xl font-bold'>.</p>
   </div>
    <div className= "flex ">
    {
        (logIn)? (<button  onClick={handleLogIn} className=" border px-1 mx-1 font-semibold login">
        {(logIn?'Log Out':'Log In')}
         </button> ):  (<div> <button  onClick={handleLogIn} className=" border px-1 mx-1 font-semibold login">Sign up</button>
            <button className=" border px-1 mx-1 font-semibold login" onClick={handleLogIn}>{(logIn?'Log Out':'Log In')}</button></div>)
    }
  
    <div>
    <img src={hamburger} alt="hamburger menu" />
    </div>
     </div>


        </div>
    );
};

export default Navbar;