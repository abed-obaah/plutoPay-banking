import React, { useState } from "react";
// import logo from '../img/plutopay-removebg-preview.png';
import logo from'../img/logoipsum-245.svg';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import ActivationCode from "../Accounts/activationCode";
import  Navigate  from "../Accounts/couponChecker";
import Home from "../components/Home";
import { FaBars, FaTimes } from "react-icons/fa";
import './Nav.css'

function Navbar() {
    const [Mobile, setMobile] = useState (false);
    const [hideButton,setHideButton] =useState(false);
    return(
        <Router>
                <div className="header flex items-end">
                            <div className="flex space-x-2 items-center">
                                <img className="h-6" src={logo} alt="logo" srcSet="" />
                                <p className="text-lg font-semibold">
                                       
                                        <Link to="/">
                                            <span className=" text-lime-50">Pluto</span>
                                            <span className="logopay text-sky-500">Pay</span>
                                        </Link>
                                        
                                </p>
                            </div>
                    
                    <nav className="nav flex  leading-6 font-semibold text-slate-200 dark:text-slate-200 items-baseline">

                            <ul className={Mobile ? "nav-links-mobile flex space-x-8" :"nav-links"} onClick={() => setMobile(false)}>
                                <Link to="/">
                                    <li className="hover:text-sky-500 dark:hover:text-sky-400 active" >
                                        Home
                                    </li>
                                </Link>
                                
                                <Link to="/More">
                                    <li className="hover:text-sky-500 dark:hover:text-sky-400">
                                        Learn More
                                    </li>
                                </Link> 
                                
                                <Link to="/Navigate">
                                    <li className="hover:text-sky-500 dark:hover:text-sky-400">
                                         News and Posts
                                    </li>
                                </Link>
                                <span className={hideButton ? "show space-x-8 ml-2 font-medium text-xs leading-5 rounded-full text-sky-600 bg-sky-400/10 px-2 py-0.5  hover:text-sky-400": "hide space-x-8 ml-2 font-medium text-xs leading-5 rounded-full text-sky-600 bg-sky-400/10 px-2 py-0.5  hover:text-sky-400" }
                                onClick={()=>setHideButton(true)}>
                                    Get started
                                </span>
                            </ul>
                            
                            <button className="mobile-menu-icon md:-mt-10 lg:-mt-0" onClick={() => setMobile(!Mobile)}>
                                {Mobile ? <FaTimes className="close  sm:-mt-6 "/>: <FaBars className="open"   />}
                            </button>
                            
                    </nav>
                </div>

                    <Routes>
                        <Route exact path="/" Component={Home}/>
                    </Routes>
                    <Routes>
                        <Route path="/More" Component={ActivationCode}/>
                    </Routes>
                    <Routes>
                        <Route path="/Navigate" Component={Navigate}/>
                    </Routes>

        </Router>
        
    );
}

export default Navbar;