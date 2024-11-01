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
    <div className="text-4xl font-bold ">aether.</div>
    <div className= "flex ">
    <button className=" border px-1 mx-1 login">Sign up</button>
    <button className=" border px-1 mx-1 login" onClick={handleLogIn}>{(logIn?'Log In':'Log Out')}</button>
    <div><img src={hamburger} alt="" srcset="" /></div>
     </div>


        </div>
    );
};

export default Navbar;