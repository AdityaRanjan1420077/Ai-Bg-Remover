import { useState } from 'react'
import './App.css'
import MenuBar from "./components/MenuBar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import {Toaster} from "react-hot-toast";

function App() {
    return (
        <div>
            <MenuBar />
            <Toaster/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
