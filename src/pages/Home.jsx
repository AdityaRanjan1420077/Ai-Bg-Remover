import React from 'react'
import Header from "../components/Header.jsx";
import BgRemovalSteps from "../components/BgRemovalSteps.jsx";
import BgSlider from "../components/BgSlider.jsx";
import Pricing from "../components/Pricing.jsx";
import Testimonials from "../components/Testimonials.jsx";
import TryNow from "../components/TryNow.jsx";

const Home = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 font-['Outfit']">
            <Header />
            {/*    Background removal steps*/}
            <BgRemovalSteps />
        {/*    Slider section of the bg remover*/}
            <BgSlider/>

        {/*    Buy credit plan section*/}
            <Pricing/>
        {/*    User Testimonials*/}
            <Testimonials/>
        {/*    Try Now section*/}
            <TryNow/>

        </div>
    )
}
export default Home
