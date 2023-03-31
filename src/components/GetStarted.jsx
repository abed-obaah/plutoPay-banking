import React from "react";
// import planet from '../img/get-started.png';
import planet from '../img/icon-01.png';

function GetStarted() {
  

    const styles={
        planetImage: {
            width:'20rem',
            // zIndex:'2000'
            
        },
    }

    return(
        <div data-aos="fade-up"  data-aos-duration="1000" className="get_started flex justify-around items-baseline">
            <div className=" ml-14">
                <h6 className="mt-20 mb-4 text-md leading-6 font-semibold text-sky-500 dark:text-sky-400 border-b border-slate-200" >earn without limits</h6>
                <h1 className=" font-bold text-7xl mb-8">
                    <span className=" text-lime-50">Pluto</span>
                    <span className="logopay text-sky-500">Pay</span>
                </h1>
                <p className=" mt-10 antialiased text-slate-500 ">Your Chance to Limitless Fortune</p>
                <button className=" mt-10 py-2 px-8 border border-blue-400 text-lime-50 rounded-full hover:bg-sky-700 hover:border-blue-400">
                    GET STARTED 
                </button>
            </div>

            <div className="h-10 image__overview" >
                <img src={planet} alt="" srcSet={planet} style={styles.planetImage} className="z-10 relative" />
            </div>
           
        </div>
    )
}

export default GetStarted;