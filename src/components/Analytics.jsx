import React from "react";
import Laptop from '../assets/laptop.jpg';
import { motion } from 'framer-motion';

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    x: -300,
  },
  animate: {
    transition: {
      duration: 2,
    },
    opacity: 1,
    x: 0,
  }
}

const fadeInAnimationsVariantsFromRight = {
  initial: {
    opacity: 0,
    x: 500,
  },
  animate: {
    transition: {
      duration: 2.5,
      delay: 1,
    },
    opacity: 1,
    x: 0,
  }
}



const Analytics = () => {
    

    return(
        <div className="w-full bg-white py-16 px-4 analytics anim no_hide">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <motion.img 
                  className="w-[500px] mx-auto my-4" 
                  variants={fadeInAnimationsVariants}
                  initial = 'initial'
                  whileInView='animate'
                  viewport={{
                    once: true,
                  }}
                  src={Laptop} 
                  alt="/" />
                <motion.div 
                  className="flex flex-col justify-center rightSide"
                  variants={fadeInAnimationsVariantsFromRight}
                  initial = 'initial'
                  whileInView='animate'
                  viewport={{
                    once: true,
                  }}
                >
                    <p className="uppercase text-[#00df9a] font-bold">data analytics dashboard</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptas expedita soluta fugit quo debitis deleniti sed voluptate architecto quas voluptates error minima, doloribus quis vel. Labore unde sit ipsa?
                    </p>
                    <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0  py-4 ">Get Started</button>
                </motion.div>
            </div>
            <script src="main.js"></script>
    </div>
    );
}

export default Analytics;