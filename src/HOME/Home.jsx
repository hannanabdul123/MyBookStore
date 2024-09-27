import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Banner from '../Components/Banner'
import Carts from '../Components/Carts'
import Footer from '../Components/Footer'
function Home() {
  const [query, setQuery] = useState('');
  return (
    <>
    
    <div className="bg-white text-black dark:bg-dark-background dark:text-dark-text">
    <Nav onSearchChange={(val)=>setQuery(val)}/>
      <Banner/>

      <Carts 
      SearchQuery={query}
      filtercondition={(book) => book.category === 'Free'} />
       
        
      <Footer/>
      </div>
    </>
  )
}

export default Home