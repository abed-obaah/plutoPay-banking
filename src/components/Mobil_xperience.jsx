import React from "react";
import featImage from '../img/Message_03.png'

function mobil_xperience() {
    return(
        <div className="mobil_xperience">
          <div className=" mt-44 h-60 w-96 ml-20 mr-52 mobile_xperience" data-aos="fade-up-right" data-aos-duration="1000">
            <h5 className="text-sky-500">MOBILE EXPERIENCE</h5>
            <h1 className=" mt-5 text-3xl text-lime-50">We enhance visual <br/> display and promote</h1>
            <p className=" mt-5 text-slate-500">Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt ut labore ut enim ad minim veniam nostrud.</p>
            {/* <button className=" rounded-full border border-orange-400">
                            lbtn
            </button>
            <button className=" rounded-full border border-orange-400">
                            rbtn
            </button> */}
          </div>
          <div className="carousel flex" data-aos="fade-up-left" data-aos-duration="1000">
                <div className="flex">
                        <img className="w-80" src={featImage} alt="img" srcset={featImage} />
                        <img className="w-80 mr-2" src={featImage} alt="img" srcset={featImage} />
                 </div>
          </div>
        </div>
    )
}

export default mobil_xperience;