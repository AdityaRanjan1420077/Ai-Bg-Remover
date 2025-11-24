import React from 'react';
import { steps } from "../assets/assets.js";

const BgRemovalSteps = () => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-12 font-bold">
                How to remove a background in seconds?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {steps.map((item, index) => (
                    <div
                        className="bg-gray-200 p-6 rounded-2xl shadow-sm text-left"
                        key={index}
                    >
                        <span className="inline-block bg-gray-200 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                            {item.step}
                        </span>

                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 text-base leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BgRemovalSteps;
