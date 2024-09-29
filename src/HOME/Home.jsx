import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import Banner from '../Components/Banner'
import Carts from '../Components/Carts'
import Footer from '../Components/Footer'
function Home() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log('Query in Home (passed from Nav):', query);  // Log query state in Home
  }, [query]);

  return (
    <>
    
    <div className="bg-white text-black dark:bg-dark-background dark:text-dark-text">
    <Nav onSearchChange={(val)=>setQuery(val)}
      flag={true}/>
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