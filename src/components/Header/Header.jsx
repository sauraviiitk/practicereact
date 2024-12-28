import React from "react";
import { Link,NavLink } from "react-router-dom";

function Header(){
    return(
        <>
        <div className="containhead w-full h-14 bg-white shadow-md flex items-center justify-between">
            <div className="brandimg m-5 p-5">
                <Link
                to='/'

                >
                <img src="\images\brand_logo.png" className="w-12 h-1/2"/>
                </Link>
            </div>
            <div className="nav-icons m-5 p-5 flex items-center justify-center gap-5 ">
                <ul className="flex gap-5 mr-80 cursor-pointer">
                    <li>
                        <NavLink
                        to="/"
                        className={({isActive})=>
                            isActive?"text-blue-500 font-bold":"text-gray-700 font-medium hover:text-blue-400"
                        }
                          
                        >
                               Home
                        </NavLink>                     
                        </li>
                        <li>
                        <NavLink
                        to="/about"
                        className={({isActive})=>
                            isActive?"text-blue-500 font-bold":"text-gray-700 font-medium hover:text-blue-400"
                        }
                          
                        >
                               About
                        </NavLink>                     
                        </li>        
                        <li>
                        <NavLink
                        to="/contact"
                        className={({isActive})=>
                            isActive?"text-blue-500 font-bold":"text-gray-700 font-medium hover:text-blue-400"
                        }
                          
                        >
                               Contact
                        </NavLink>                     
                        </li>                </ul>
                <button className="shadow-sm bg-red-600 border outline-none rounded-lg p-2 text-center text-white">Login</button>
            </div>
        </div>
        </>
    )
}

export default Header