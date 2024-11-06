import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/dashboard" className="flex items-center">
                        <img
                            src="data:image/png;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Signup
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                           
                        
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
