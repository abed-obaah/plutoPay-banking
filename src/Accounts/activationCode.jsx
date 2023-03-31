import React  from "react";
import featuredImage from '../img/featured-image-7.jpg';
import Footer from "../components/Footer";


function activationCode() {
    return(
        <div>
                <div className=" bg-white p-20 mt-10" >
                     <div className="about_hero mt-10 mb-10 text-center capitalize" data-aos="fade-left" data-aos-duration="1000">
                        <h1 className=" text-4xl">everything you need to know about us</h1>
                        <span className=" pt-20">Home - About us</span>
                    </div>
              </div>

              <div className=" mt-40 flex justify-evenly sm:flex flex-wrap">
                    <div className="sm: p-6" data-aos="fade-left" data-aos-duration="1000" >
                        <img src={featuredImage} alt="" srcSet="" className=" rounded-md" />
                    </div>
                    <div className=" max-w-lg px-2 text-gray-400 sm:text-gray-400 md:text-white lg:text-gray-400" data-aos="fade-up" data-aos-duration="1000">
                        <h1 className=" text-center">PLUTOPAY.</h1>
                        <p>We are an online metaverse and innovation structured to solving problems faced by people using different features and increased commercialization. MIRATEL is a multipurpose platform set to helping her users and customers to acquiring valuable online skills. MIRATEL also focus on connecting entrepreneurs, brand and businesses owners, skillful people with those who need their service. We also allow our users to make money through networking of our products, users and customers products by affiliating. MIRATEL is an all round
                             marketing platform, we also 
                             serve as the future of technology and the 
                             future of digital marketing by creating and investing UNIQUE
                            features ever to be done on th</p>
                        <div> 
                        </div>
                    </div>
                    
              </div>
              {/* <div className=" flex justify-end mb-40 text-black sm: w- ml-11 text-cyan-300 md:text-white lg:text-red-500 ">
                                <div  className=" w-56 mr-10">
                                        <p >Our team and brand in general also focused
                                         on mentoring and building people to become entrepreneurs and successful business owners through networking in 
                                        collaboration with equipping with valuable digital 
                                        skills. 
                                        </p>
                                </div>
                               <div className=" w-56 mr-20" >
                                        <p  >Our team and brand in general also focused on mentoring and building people to become entrepreneurs and successful business owners through networking in 
                                        collaboration with equipping with valuable digital 
                                        skills. 
                                        </p>
                                </div>
            </div> */}

            <div className=" bg-white p-20 mt-10 ">
                <div className=" mt-10 mb-10 text-3xl md:text-4xl text-center lg:text-5xl font-heading" data-aos="fade-left" data-aos-duration="1000">
                      <h1 className=" text-4xl">GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON. 
                            THEY ARE DONE BY A TEAM OF PEOPLE.
                        </h1>
                </div>
                        
            </div>
            <Footer/>
        </div>
        
        
    )
}
export default activationCode;