import React from "react";
import featImage from "../img/Message_04.png"

function PPFeatures() {
    return(
        <div className="PPFeatures" data-aos="fade-up" data-aos-duration="1000">
              <div className="grfeat flex items-center justify-center flex-col mt-20">
                <p className=" text-3xl">
                    <span className=" text-lime-50">Pluto</span>
                    <span className="logopay text-sky-500">Pay</span> 

                    <span className=" text-lime-50"> Features</span></p>
              </div>

              {/* <div classNameName="flex items-center justify-center Featrow"> */}
                    {/* <div>
                        <ul classNameName="text-right FeatrowList">
                            <li classNameName="margin-5-rem-bottom">
                               <span classNameName="featSpa text-sky-500">Activity  </span>
                                <br/>
                                <p classNameName="mt-4 -mb-5 text-lime-50">2 way Earning Benefits for Activity</p><br/> 
                                <span classNameName="featSpan text-lime-50 "> Members</span>
                         </li>

                            <li classNameName="margin-5-rem-bottom">

                               <span classNameName="featSpa text-sky-500">Affiliate</span>
                                <br/>
                                <p classNameName="mt-4 -mb-5 text-lime-50">2 way Earning Benefits For Affiliate</p><br/> 
                                <span classNameName="featSpan text-lime-50"> Members</span>
                         </li>
                            <li>
                               <span classNameName="featSpa text-sky-500">Withdrawals</span>
                                <br/>
                                <p classNameName="mt-4 -mb-5 text-lime-50">USDT and Naira Withdrawal Modes</p>
                              </li>
                        </ul>
                    </div>
                    <div classNameName=" w-80">
                        <img src={featImage} alt="img" srcset={featImage} />
                    </div>
                    <div>
                    <ul classNameName="text-left FeatrowList ">
                            <li classNameName="margin-5-rem-bottom">
                               <span classNameName="text-sky-500">Earnings</span>
                                <br/>
                                <p classNameName="mt-4 text-lime-50">Highest Commissions on Earnings</p>
                              </li>
                            <li classNameName="margin-5-rem-bottom">
                               <span classNameName="text-sky-500">Bonuses</span>
                                <br/>
                                <p classNameName="mt-4 -mb-5 text-lime-50">Instant Welcome Data Bonus to all</p><br/> 
                                <span classNameName="featSp text-lime-50">New members</span>
                              </li>
                              
                            <li>
                               <span classNameName="text-sky-500">More Bonuses</span>
                                <br/>
                                <p classNameName="mt-4 -mb-5 text-lime-50">Compensation Plans/Prizes</p>
                              </li>
                        </ul>
                    </div> */}
                   {/* <!-- component --> */}
                  <div className="containez">
                  <div
                    className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
                  >
                    {/* <!-- left --> */}
                    <div className="flex flex-row-reverse md:contents">
                      <div
                        className="bgc col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                      >
                        <h3 className="font-semibold text-lg mb-1"><span className=" text-sky-500">Activity  </span></h3>
                        <p className="leading-tight text-justify">
                            2 way Earning Benefits for Activity Lorem ipsum dolor sit amet.
                        </p>
                        <span className="featSpan text-lime-50 "> Members</span>
                      </div>
                      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div className="h-full w-6 flex items-center justify-center">
                          <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                        </div>
                        <div
                          className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bgc shadow"
                        ></div>
                      </div>
                    </div>
                    {/* <!-- right --> */}
                    <div className="flex md:contents">
                      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                          <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                        </div>
                        <div
                          className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bgc shadow"
                        ></div>
                      </div>
                      <div
                        className="bgc col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                      >
                        <h3 className="font-semibold text-lg mb-1"><span className=" text-sky-500">Affiliate</span></h3>
                        <p className="leading-tight text-justify">
                        2 way Earning Benefits For Affiliate Lorem ipsum dolor sit amet.
                        </p>
                        <span className="featSpan text-lime-50"> Members</span>
                      </div>
                    </div>
                    {/* <!-- left --> */}
                    <div className="flex flex-row-reverse md:contents">
                      <div
                        className="bgc col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                      >
                        <h3 className="font-semibold text-lg mb-1 text-sky-500">Earnings</h3>
                        <p className="leading-tight text-justify">
                          Complete tasks to earn Lorem ipsum dolor sit amet..
                        </p>
                      </div>
                      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div className="h-full w-6 flex items-center justify-center">
                          <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                        </div>
                        <div
                          className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bgc shadow"
                        ></div>
                      </div>
                    </div>
                    {/* <!-- left --> */}
                    <div className="flex flex-row-reverse md:contents">
                      <div
                        className="bgc col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                      >
                        <h3 className="font-semibold text-lg mb-1"> <span className=" text-sky-500">Withdrawals</span></h3>
                        <p className="leading-tight text-justify">
                        USDT and Naira Withdrawal Modes Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div className="h-full w-6 flex items-center justify-center">
                          <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                        </div>
                        <div
                          className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bgc shadow"
                        ></div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              {/* </div> */}
        </div>
    )
}

export default PPFeatures;