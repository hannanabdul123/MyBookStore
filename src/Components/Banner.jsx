import React from 'react'
import BookStore from "../assets/Books.jpg";
function Banner() {
  return (
    <>
    <div className='pt-40'>
    <div className=' flex flex-col-reverse md:flex-row px-10 '>
        <div  className=' py-10 md:py-20 w-full md:w-1/2' > 
            <h1 className='text-2xl md:text-4xl font-bold'> Hello, Welcome here to learn 
                something <span className='text-pink-500'> new everyday!!!</span> </h1>
            <p className='py-5 md:py-14 text-sm md:text-base'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam optio veritatis ullam impedit. Quidem quas, quasi tempore cumque, velit ratione, cupiditate iste aliquid explicabo ad est temporibus vitae dolorem cum.</p>
            <div className='flex flex-col items-start gap-4 md:gap-8'>
            <input  className='px-2 py-3 w-full md:w-80 rounded-md outline-none border border-gray-500' type="text" placeholder='Enter your Email to login' />
          
            <button className="btn btn-secondary">Secondary</button>
            </div>
            
        </div>
        <div className='py-8 w-full md:w-1/2'>
       <img  className="w-full h-auto md:w-auto" src={BookStore} alt="Loading Image..." />
        </div>

        </div>
        <div className='px-5 md:px-10 py-5 md:py-10 space-between'>
              <h1 className='font-bold py-2'>Free Offered Courses</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, error aliquid! Quisquam dolorum molestiae iusto totam accusantium impedit  reprehenderit quos ipsam nisi nostrum odio, tenetur illum aliquid ea. Sapiente, nisi.</p>
            </div>
    </div>
    </>
  )
}

export default Banner