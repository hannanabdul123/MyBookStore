import React from 'react'
import Home from './HOME/Home'
import { Route, Routes } from 'react-router-dom'
import Course from './Components/Course'
import About from './Components/About'
import Contact from './Components/Contact'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'



function App() {
   {/*Implementing Routes for respective Path */}
  return (
   <>
   <div className="bg-white text-black dark:bg-dark-background dark:text-white">
<Routes>
  
<Route path='/' element={<Home/>}/>
<Route path='/Course' element={<Course/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/SignUp' element={<SignUp/>}/>
<Route path='/SignIn' element={<SignIn/>}/>

</Routes>
   
   </div>
   </>
  )
}

export default App