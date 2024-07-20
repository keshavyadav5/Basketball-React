import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Program from './Components/Program/Program'
import Testimonial from './Components/Testimonial/Testimonial'
import Rating from './Components/Rating/Rating'
import Team from './Components/Team/Team'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const Page = () => {
  return (
    <div className='page'>
    <Header/>
    <Home/>
    <About/>
    <Program/>
    <Testimonial/>
    <Rating/>
    <Team/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Page