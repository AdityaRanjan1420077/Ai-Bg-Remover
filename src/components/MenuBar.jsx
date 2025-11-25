import React, { useState } from "react";
import { Menu, X } from "lucide-react";         // ✅ Correct import
import { assets } from "../assets/assets.js";
import {Link} from "react-router-dom";
import {SignedIn, SignedOut, UserButton} from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";
import {useUser} from "@clerk/clerk-react";


function MenuBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const{openSignIn, openSignUp} = useClerk();
    const{user}= useUser();

    const openRegister = ()=>{
        setMenuOpen(false)
        openSignUp({});
    }

    const openLogin = ()=>{
        setMenuOpen(false)
        openSignIn({});
    }

    return (
        <nav className="bg-white px-8 flex justify-between items-center py-4 shadow-sm">

            {/* Left Side: Logo + Text */}
            <Link  className="flex items-center space-x-2" to="/">
                <img
                    className="h-8 w-8 object-contain cursor-pointer"
                    src={assets.logo}
                    alt="logo"
                />
                <span className="text-2xl font-semibold text-indigo-700 cursor-pointer">
                    remove.<span className="text-gray-400">bg</span>
                </span>
            </Link >

            {/* Right Side (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
                <SignedOut>
                    <button className="text-gray-700 hover:text-blue-500 font-medium" onClick={openLogin}>
                        Login
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all" onClick={openRegister}>
                        Sign Up
                    </button>
                </SignedOut>
                <SignedIn>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
                            <img src={assets.credit} alt="credits" height={24} width={24} className="rounded-full"/>
                            <p className="text-xs sm:text-sm font-medium text-gray-700">
                                Credits: 0
                            </p>
                        </button>
                        <p className="text-gray-700 max-sm:hidden">
                            Hi, {user?.fullName}
                        </p>
                    </div>
                    <UserButton/>
                </SignedIn>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>


            {/*Mobile Menu*/}
            {menuOpen && (
                <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 w-40 p-4">
                    <SignedOut>
                        <button className="text-gray-700 hover:text-blue-500 font-medium" onClick={openLogin}>
                            Login
                        </button>
                        <button className="text-gray-700 bg-gray-200 font-medium px-4 py-2 rounded-full text-center" onClick={openRegister}>
                            Sign Up
                        </button>
                    </SignedOut>
                    <SignedIn>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <button className="flex items-center gap-2 bg-blue-100 px-4 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
                                <img src={assets.dollar} alt="credits" height={24} width={24} className="rounded-full"/>
                                <p className="text-xs sm:text-sm font-medium text-gray-700">Credits: 0</p>
                            </button>
                        </div>
                        <UserButton/>
                    </SignedIn>
                </div>

                    )}

        </nav>
    );
}

export default MenuBar;
