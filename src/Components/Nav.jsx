import React, { useState, useEffect } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import list from '../../public/list.json';


function Nav({onSearchChange}) {
  const [query, setQuery] = useState('');
  console.log(query)

  const handleSearch = (val) => {
    setQuery(val);
    onSearchChange(val);  // Pass the search input back to parent
  };
  const[thheme,Settheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
   const element=document.documentElement;
   useEffect(()=>{
    if(thheme === 'dark'){
      element.classList.add('dark');
      localStorage.setItem('theme','dark');
      document.body.classList.add('dark');
    }else{
      element.classList.remove('dark');
      localStorage.setItem('theme','light');
      document.body.classList.remove('dark');
    }
   },[thheme,element])
   
 
  const[sticky,Setsticky]=useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        Setsticky(true);
      }else{
        Setsticky(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    };
  },[]);
  
  const toggleTheme = () => {
    Settheme(thheme === 'light' ? 'dark' : 'light');
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

 

  return (
    
    <div
        className={` max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white dark:bg-slate-900 text-black dark:text-white fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md  duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
         <button
          className='md:hidden block text-black dark:text-white'
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
      
      <div className="flex  justify-between  my-5 mx-5 md:mx-20">
        <h1 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white mb-4 md:mb-0">BookStore</h1>
        
          
        <div className="flex flex-row items-center md:space-x-7 ">
        <div className={`md:block   ${isOpen ? 'block' : 'hidden'} `}>
        <ul className=" space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row ">
        <li>
          <NavLink 
            to="/" 
            exact 
           className="bg-white text-black hover:bg-black hover:text-white p-2 rounded"
  activeClassName="bg-blue-500 text-white"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Course" 
           className="bg-white text-black hover:bg-black hover:text-white p-2 rounded"
  activeClassName="bg-blue-500 text-white"
          >
            Course
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Contact" 
           className="bg-white text-black hover:bg-black hover:text-white p-2 rounded"
  activeClassName="bg-blue-500 text-white"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/About" 
            className="bg-white text-black hover:bg-black hover:text-white p-2 rounded"
  activeClassName="bg-blue-500 text-white"
          >
            About
          </NavLink>
        </li>
      </ul>
      </div>
      <div className='px-5'>
     
          <Search books={list}  Query={query} OnSearch={handleSearch} />
          
           </div>
         

          <label className="pr-4 pl-3  swap swap-rotate mb-4 md:mb-0">
            {/* Hidden checkbox controls the state */}

            {/* <input type="checkbox" className="theme-controller" value="synthwave" /> */}
            <input type="checkbox"  checked={thheme==='dark'} onChange={toggleTheme} />

            {/* Sun icon */}
            <svg className={`swap-off h-8 w-8 fill-current ${thheme === 'light' ? '' : 'visible'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              
              
            </svg>

            {/* Moon icon */}
            <svg className={`swap-on h-8 w-8 fill-current ${thheme=='dark' ?'visible':''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
              
              />
            </svg>
          </label>
        <div className='pb-3'>
          <NavLink 
            to="/SignUp" 
            className="bg-black px-3 py-3  text-white rounded-md whitespace-nowrap"

          >
            SignUp
          </NavLink>
          
          </div>
         
        
        </div>
      </div>
    </div>
  );
}

export default Nav;
