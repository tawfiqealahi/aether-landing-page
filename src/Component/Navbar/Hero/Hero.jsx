import './Hero.css'
import landingImage from '../../../assets/hero landing page.png'
import { RiAppleLine } from "react-icons/ri";
import { IoLogoGooglePlaystore } from 'react-icons/io5';



const Hero = () => {
    return (
        <div className='flex  mx-auto container  ' >
            <div className='w-1/2'>
             <h3 className='mt-10 font-bold  text-neutral-950 text-5xl ' >Make <br /> learning fun </h3> 
            <p className='my-10'>Where your instructor knows the best <br /> way to make you understand</p>
            <button className='p-2 my-10  font-semibold  heroSignUpButton'>Sign up for free</button>
            <div>
                <h4 className=''>Or download the app:</h4>
                <div className='flex justify-between w-72 my-3'>
                <button className=' font- text-gray-100 bg-black px-2 p-1' type="button"><RiAppleLine className='w-10' /> <div>
                <p className=' font-normal text-sm '>Available on the</p> Apple Store
                </div> </button>
                <button className='font-bold text-gray-100 bg-black px-2 p-1' type="button"> 
                <IoLogoGooglePlaystore />
                Play store</button>
                </div>
            </div>
            </div>
            <div className='w-1/2'>
                <img src={landingImage} className='flex mx-auto m-10' alt="landing image"  />
            </div>
        </div>
    );
};

export default Hero;