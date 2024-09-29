import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
function Contact() {
  return (
    <>
    <div className="min-h-screen  flex flex-col">
        <Nav flag={false}/>
        
        <div className=" mt-40  flex justify-center   ">
         <form className='p-5 mb-10 text-white bg-gray-800 rounded-lg'>
          <h1 className='px-10 font-bold text-4xl'>Contact Us</h1>
          <ul className='py-5 px-10'>
        <li className='mb-5'>Name</li>
        <input type="Name" className='text-white px-4 mb-5 py-2 rounded-lg outline-none border border-black'   placeholder='Enter Your Name' />
          <li className='mb-5'>Email</li>
          <input type="Email" className=' text-white px-4 mb-5 py-2 rounded-lg outline-none border border-black'  placeholder='Enter Your Email' />

        
          <li className='mb-5'>Message</li>
           <textarea  id="message" placeholder='Type Your Query'
           className='w-full px-4 h-32 outline-none rounded-lg'
           ></textarea>
          
          <button type='submit' className='h-10 w-full mt-5 bg-blue-800 hover:bg-blue-900 font-bold'>Submit</button>   

        
        </ul>
       
         </form>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Contact