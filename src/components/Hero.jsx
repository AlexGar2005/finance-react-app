import React from "react";
import ReactTyped from "react-typed";


const Hero = () => {
    return (
        <div className="text-white "> 
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2 fadeFromLeft">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 fadeFromRight delay1">Grow with data.</h1>
                <div className="flex justify-center items-center ">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 fadeFromLeft delay2">Fast, flexible financing for</p>
                    <ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 fade delay2" strings = {[' BTB', ' BTC', ' SASS']} typeSpeed = {120} backSpeed={140} loop/>
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500 fadeFromRight delay3">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-4 text-black transition-all duration-300 hover:bg-[#17a679] fade delay4">Get Started</button>
            </div>
        </div>
    );
}

export default Hero;