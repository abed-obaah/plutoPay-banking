import React from "react";

function Features() {
    return(
        <div data-aos="fade-down" data-aos-duration="1000" 
         className="features ">
            <div className="grfeat flex items-center justify-center flex-col -mt-2npm0">
                <p className="text-gradient-light-purple-light-red letter-spacing-1-half uppercase mb-10">Easy Navigation </p>
                <h2 className=" text-3xl text-sky-500">Great Features Just For You<span className=" text-4xl text-white">!</span></h2>
            </div>

            <div className="mt-20 max-w-6xl mx-auto px-4 sm:px-3 lg:px-2 py-6">
                <ul className="featuresItems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3" >
                    <li>
                        <span className="featSpa text-sky-500 font-bold">Dashboard </span>
                     <br/>
                        <p className="mt-4 -mb-5 text-slate-200 font-semibold"> Have total control of your  </p><br/> 
                        <span className="featSpan text-slate-200"> earnings </span>
                    </li>

                    <li>
                        <span className="featSpa text-sky-500 font-bold">No Refferal Required </span>
                           <br/>
                        <p className="mt-4 -mb-5 text-slate-200 font-semibold"> Just perform simple tasks</p><br/>
                        <span className="featSpan text-slate-200">everyday </span>
                    </li>

                    <li>
                        <span className="featSpa ml-4 text-sky-500 font-bold">Contest </span>
                        <br/>
                        <p className="mt-4 -mb-5 text-slate-200 font-semibold">Participate in contests to win </p> 
                        <br/>
                      <span className="featSpan text-slate-200">Amazing prices </span>
                    </li>

                    {/* <li>
                        <span className="featSpa text-sky-500 font-bold">Customer satisfaction </span>
                        <br/>
                        <p className="mt-4 -mb-5 text-slate-200 font-semibold">Submit your query and get </p> <br/>
                        <span className="featSpan text-slate-200">solutions swiftly </span>
                    </li> */}
                </ul>
            </div>

            {/* <section className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="">
                      <span className="featSpa text-sky-500 font-bold">Dashboard </span>
                            <br/>
                        <p className="mt-4 -mb-5 text-slate-200 font-semibold"> Have total control of your  </p><br/> 
                        <span className="featSpan text-slate-200"> earnings </span>
                    </div>
            </section> */}
            
        </div>
    )
}

export default Features;