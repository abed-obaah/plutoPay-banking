import React from "react";
import featuredImage from '../img/featured-image-7.jpg';
import Footer from "../components/Footer";

function couponChecker() {
    const style={
        reportError:{
            color:"red"
        }
    }
    return(
        <div>
              <div className=" bg-white p-20 mt-10">
                     <div className="about_hero mt-10 mb-10 text-center capitalize" data-aos="fade-left" data-aos-duration="1000">
                        <h1 className=" text-4xl">everything you need to know about us</h1>
                        <span className=" pt-20">Home - About us</span>
                    </div>
                    
              </div>

              <div className=" ml-9 mt-10" data-aos="fade-in" data-aos-duration="1000">
                 <h2 className=" text-xl text-blue-50">Coupon Vendors</h2>
              </div>

              <section className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className=" text-center pb-12" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-base font-bold text-indigo-600">
                            we have the best customers
                    </h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-300">
                            check our awesome teams
                    </h1>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center" data-aos="fade-left" data-aos-duration="1000">
                                <div className=" mb-8">
                                        <img className=" object-center object-cover rounded-full h-36 w-36" src={featuredImage} alt="" />
                                </div>
                                <div className="text-center">
                                        <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                                        <p className="text-base text-gray-400 font-normal"><span>Bank Name: </span>Opay</p>
                                </div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div className=" mb-8">
                                        <img className=" object-center object-cover rounded-full h-36 w-36" src={featuredImage} alt="" />
                                </div>
                                <div className="text-center">
                                        <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                                        <p className="text-base text-gray-400 font-normal"><span>Bank Name: </span>Opay</p>
                                </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div className=" mb-8">
                                        <img className=" object-center object-cover rounded-full h-36 w-36" src={featuredImage} alt="" />
                                </div>
                                <div className="text-center">
                                        <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                                        <p className="text-base text-gray-400 font-normal"><span>Bank Name: </span>Opay</p>
                                </div>
                                {/* <div className=" mb-2">
                                        <img className=" object-center object-cover rounded-full h-20 w-20" src={featuredImage} alt="" />
                                </div> */}
                        </div>
                        {/* <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div className=" mb-8">
                                        <img className=" object-center object-cover rounded-full h-36 w-36" src={featuredImage} alt="" />
                                </div>
                                <div className="text-center">
                                        <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                                        <p className="text-base text-gray-400 font-normal">Opay</p>
                                </div>
                        </div> */}
                </div>

              </section>
              <Footer/>
        </div>
            
    );
    
}
export default couponChecker;