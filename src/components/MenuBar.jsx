import React, { useState } from "react";
import { Menu, X } from "lucide-react";         // ✅ Correct import
import { assets } from "../assets/assets.js";

function MenuBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white px-8 flex justify-between items-center py-4 shadow-sm">

            {/* Left Side: Logo + Text */}
            <div className="flex items-center space-x-2">
                <img
                    className="h-8 w-8 object-contain cursor-pointer"
                    src={assets.logo}
                    alt="logo"
                />
                <span className="text-2xl font-semibold text-indigo-700 cursor-pointer">
                    remove.<span className="text-gray-400">bg</span>
                </span>
            </div>

            {/* Right Side (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
                <button className="text-gray-700 hover:text-blue-500 font-medium">
                    Login
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all">
                    Sign Up
                </button>
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
                    <button className="text-gray-700 hover:text-blue-500 font-medium">
                        Login
                    </button>
                    <button className="text-gray-700 bg-gray-200 font-medium px-4 py-2 rounded-full text-center">
                        Sign Up
                    </button>
                </div>

                    )}

        </nav>
    );
}

export default MenuBar;
