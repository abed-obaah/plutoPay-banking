import React from "react";
// import rocketcloud from '../img/payhand.png'
import rocketcloud from '../img/service-6-1.png'

function ReadTestimonies() {
    return(
        <div className="ReadTestimonies flex items-center justify-evenly mb-10" data-aos="fade-down" data-aos-duration="1000">
            <img src={rocketcloud} alt="" srcSet="" />
            <div className="flex items-center justify-center flex-col mt-10 ml-10">
                <h6 className="text-gradient-light-purple-light-red letter-spacing-1-half">SATISFIED MEMBERS</h6>
                <h5 className=" text-3xl text-center mb-20 mt-10 text-lime-50">Loved by 1000 of most<br/>valuable Users</h5>
                <button className="btn border-blue bg-sky-600 px-16 p-4 rounded-full text-white hover:bg-sky-700">
                    READ TESTIMONIES
                </button>
            </div>
            
        </div>
    )
}

export default ReadTestimonies;