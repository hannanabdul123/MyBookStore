import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function SignIn() {
  const[showpass,Setshowpass]=useState(false);
  const handleshowpass=()=>{
    Setshowpass(!showpass);
  }
  return (
    <form className='fixed inset-x-0 bottom-24 flex justify-center'>


      <div className='bg-slate-200 dark:text-black justify-center shadow-xl w-96 h-50 p-5'>
        <div className='flex justify-between'>
        <h1 className='px-10 font-bold'>SignIn</h1>
        <NavLink 
            to="/" 
            className=' flex justify-center pt-1  text-black w-14 h-8 '
             activeClassName="bg-blue-500 text-white  rounded"
          >
            &#x2715;
          </NavLink>
        </div>
        


        <ul className='py-5 px-10'>
        
          <li className='mb-5'>Email</li>
          <input type="Email" className='text-white px-4 mb-5 py-2 rounded-lg outline-none border border-black'  placeholder='Enter Your Email' required />
          <li className='mb-5'>Password</li>
          
          <div className='flex'> 
          <input type={showpass?'text':'password'} className='text-white px-4 mb-5 py-2 rounded-lg outline-none border border-black' placeholder='Enter Your Password ' required/>
          <span
        className="  px-4 py-3 cursor-pointer"
        onClick={handleshowpass}>
          {showpass?<FaEyeSlash/>:<FaEye/>}
        </span>
        </div>
          
        </ul>
        <div className='px-16'>
        <button  className=' flex justify-center pt-1 px-8  text-white w-14 h-8 bg-pink-500 rounded hover:bg-pink-600' type='submit'>SignIn</button> 
        <div className='flex px-24'>
        <p className='mx-3'>Not Registered?</p>
        <NavLink 
            to="/SignUp" 
           className=' flex justify-center pt-1 px-8  text-white w-14 h-8 bg-pink-500 rounded hover:bg-pink-600'

          >
            SignUp
          </NavLink>
        </div>
        </div>
        
      </div>

    </form>
  )
}

export default SignIn
