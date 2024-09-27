import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Carts from './Carts'
import { NavLink } from 'react-router-dom'

function Course() {
  return (
    
    <div>
    <Nav/>
    <div className='py-12'>
        <div className='px-5 md:px-10 py-5 md:py-10 space-between'>
              <p className='flex justify-center font-bold text-4xl py-5'>We're delighted to have you  <p className='text-pink-500 px-1'> Here! :)</p></p> 
              
              <p className="text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, molestiae libero laboriosam perferendis reprehenderit facilis illum, nesciunt ipsa rem veritatis officiis ipsam. Non officia eos amet quo maiores facere quae!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugit enim modi? Quibusdam praesentium perferendis consequatur, sed ratione mollitia iste dicta laborum molestias harum distinctio magni porro nulla impedit eaque?
                
              </p>
              <div className='mt-10 flex justify-center '>
              <NavLink 
            to="/" 
            className=' flex justify-center pt-1  text-white w-14 h-8 bg-pink-500 rounded hover:bg-pink-600'
             activeClassName="bg-blue-500 text-white  rounded"
          >
            Back
          </NavLink>
              
              </div>
             
            </div>
            
    </div>
    <Carts filtercondition={(book) => book.category !== ''} />

    <Footer/>
    </div>
    
  )
}

export default Course