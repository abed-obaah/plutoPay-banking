import React from "react";
import logo from '../img/logoipsum-245.svg'
import { FaTwitter,FaFacebookSquare,FaInstagram} from 'react-icons/fa'

function  Footer() {
    const ColoredHr = ({color}) =>(
        <hr
          style={{
            color:color,
            backgroundColor:color,
            height:2
          }}
          />
    )
    return(
        <div className="Footer w-full">
            {/* <ColoredHr color="gray" /> */}
           
           <div>
                <div className="mt-10 flex justify-center mb-10"> 
                                <img className="h-10 mt-5" src={logo} alt="logo" srcset={logo} />
                </div>
               <ul className=" footer_lin grid justify-center justify-items-center text-slate-500 md:flex justify-evenly lg: flex justify-around">
                  <li>About us</li>
                  <li >Terms of Service</li>
                  <li>Privacy statement</li>
               </ul>

               <div className=" flex justify-center flex-col items-center">
                    <ul className="flex mt-10 mb-10 applications__in">
                        <li className="mr-2 text-blue-600"><FaTwitter/></li>
                        <li className="mr-2 text-blue-500"><FaFacebookSquare/></li>
                        <li className="mr-2 text-red-500"><FaInstagram/></li>
                    </ul>
                </div>
               <p className="flex items-center justify-center mt-5 text-white">
                © 2023 All rights reserved <span className="plutoPayLink"> <a href=""> PlutoPay </a> </span>
                </p>
                
           </div>
        </div>
    )
}

export default Footer;