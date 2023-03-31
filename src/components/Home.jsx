import React from "react";
import GetStarted from './GetStarted'
import Features from './Features'
import Howitworks from './HowitWorks'
import PPFeatures from './PPFeatures'
import Register from './Register'
import Mobil_xperience from './Mobil_xperience'
import ReadTestimonies from './ReadTestimonies'
import Footer from './Footer';
// import Navbar from './Navbar';


function Home(){
    
    return(
        <div className='container'>
            {/* <Navbar/> */}
            <GetStarted/>
            <Features/>
            <Howitworks/>
            <PPFeatures/>
            <Register/>
            <Mobil_xperience/>
            <ReadTestimonies/>
            <Footer/>
      </div>
    )
}
export default Home;