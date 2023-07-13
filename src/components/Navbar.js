import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }
  
  const [scroll,setScroll]=useState(0)
const handleScroll=()=>{
const scrollY= window.pageXOffset || document.documentElement.scrollTop;
setScroll(scrollY)
}
useEffect(()=>{
window.addEventListener('scroll',handleScroll)
return ()=>{
  window.removeEventListener('scroll',handleScroll)
}
},[])
const shouldChange=scroll > 10

  return (
    <div className={` w-[100vw] md:w-full fixed top-0 h-[90px] z-30  ${shouldChange ? 'bg-black' : 'bg-[#00000018]'} `}>
      <div className='max-w-[1240px] md:mx-auto mx-3  flex justify-between items-center h-full '>
        <div>
          <Link to="/">
          {/* <img src={logo} className=' h-[4em] w-fit rounded-md'></img> */}
      <h1 className='text-white text-5xl'>    ZIMS</h1>
          </Link>
         
        </div>
        <div className='hidden md:flex'>
          <ul className='flex  text-white items-center'>
            <li className='p-4'><Link to='/'>Home</Link></li>
            <li className='p-4'><Link to='/animals'>Animals</Link></li>
            <li className='p-4'><Link to='/about'>Abouts</Link></li>
            <li className='p-4'><Link to='/contact'>Contact Us</Link></li>
            {/* <button className='ml-4 py-[10px] px-7 bg-white text-black'><Link to='/verify'>Login</Link></button> */}
            {/* <button className='ml-4 py-[10px] px-7 bg-indigo-800'><Link to='/signup'>Sign Up</Link></button> */}

          </ul>
        </div>

        {/* Hamburger Menu */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}

        </div>

        {/* Mobile menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
          <ul>
          <li className='text-xl p-4'><Link to='/'>Home</Link></li>
            <li className='text-xl p-4'><Link to='/animals'>Animals</Link></li>
            <li className='text-xl p-4'><Link to='/about'>Abouts</Link></li>
            <li className='text-xl p-4'><Link to='/contact'>Contact Us</Link></li>
            <div className='flex flex-col gap-3 mb-5'>
            {/* <button className=' bg-white text-black'><Link to='/tickets'>Login</Link></button> */}
            {/* <button className=' bg-indigo-800'><Link to='/tickets'>Sign Up</Link></button> */}
            </div>
            


          </ul>
        </div>
        
      </div>

    </div>
  )
}

export default Navbar
