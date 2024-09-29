import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

function BuyNow() {
  const location=useLocation();
  const {book}=location.state;
  const navigate=useNavigate();
  const goback=()=>{
    navigate(-1);
  }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center '>
      <div
            className='cursor-pointer flex justify-center pt-1  text-white w-14 h-8 bg-pink-500 rounded hover:bg-pink-600'
             onClick={goback}
          >
            Back
          </div>
      
      <div className='space-y-6 p-6 w-80  '>
           <div className='space-x-4 h-72'>
           <img src={book.image} className='rounded-lg' alt={book.name} style={{ 
            
            width: '100%',
            
  

           }} />
           <div className='flex justify-between'>
           <h2 className='font-bold py-2 -ml-4'>{book.name}</h2>

           {book.price==0?(<p className='font-medium mt-2 border rounded-full  w-12 bg-fuchsia-600 flex justify-center text-white'>Free</p>):null}
           </div>
           </div>
          <p>{book.title}</p>
           <div className='flex justify-between '>
           <p
  className={` text-gray-500 font-medium border border-gray-600 rounded-2xl flex justify-center items-center ${
    book.price < 50
      ? 'w-12'
      : book.price < 100
      ? 'w-16'
      : 'w-20'
  }`}
>
  ${book.price}
</p>
    
       
           </div>
           <div className=' flex justify-between '>
           <button className='mt-2 bg-yellow-500 rounded-lg w-24 h-10 font-medium hover:bg-yellow-600 flex justify-center items-center'>Add to Cart</button>
           
           <button className='mt-2 bg-yellow-500 rounded-lg w-32 h-14 font-medium hover:bg-yellow-600 flex justify-center items-center'>Proceed to Payment</button>
           </div>
            </div>
            </div>
            
        

 
  
  )
}

export default BuyNow