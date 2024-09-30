import React, { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Carts from './Carts'
import {  useNavigate } from 'react-router-dom'

function Course() {
  const [query, setQuery] = useState('');
  
  
  const navigate=useNavigate();
  const goback=()=>{
    navigate(-1);
  }
  return (
    
    <div>
    <Nav onSearchChange={(val)=>setQuery(val)}
      flag={true}/>
    <div className='mt-20 sm:py-10 '>
        <div className='px-5 md:px-10 py-5 md:py-10 space-between  '>
        <p className='flex mt-20 justify-center font-bold text-2xl sm:text-4xl py-5'>
  We're delighted to have you Here :)
</p>

              
              <p className="py-5 text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, molestiae libero laboriosam perferendis reprehenderit facilis illum, nesciunt ipsa rem veritatis officiis ipsam. Non officia eos amet quo maiores facere quae!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugit enim modi? Quibusdam praesentium perferendis consequatur, sed ratione mollitia iste dicta laborum molestias harum distinctio magni porro nulla impedit eaque?
                
              </p>
              <div className='mt-10 flex justify-center '>
              <div
            className=' flex justify-center pt-1  text-white w-14 h-8 bg-pink-500 rounded hover:bg-pink-600'
             onClick={goback}
          >
            Back
          </div>
              
              </div>
             
            </div>
            
    </div>
    <Carts filtercondition={(book) => book.category !== ''} />

    <Footer/>
    </div>
    
  )
}

export default Course