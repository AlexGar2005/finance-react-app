import React from "react";
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { motion } from 'framer-motion';

const fadeInAnimationFromLeft = {
    initial: {
      backgroundColor: '#f7fafc',
    },
    animate: {
      transition: {
        duration: 5,
      },
      backgroundColor: '#fff',
    }
  }

  const fadeInAnimationFromCenter = {
    initial: {
      backgroundColor: '#fff',
    },
    animate: {
      transition: {
        duration: 7,
      },
      
      backgroundColor: '#f7fafc',
    }
  }

  const fadeInAnimationFromRight = {
    initial: {
        backgroundColor: '#f7fafc',
    },
    animate: {
      transition: {
        duration: 6,
      },
        backgroundColor: '#fff',
    }
  }


const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
                <motion.div 
                    className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '
                    variants={fadeInAnimationFromLeft}
                    initial = 'initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                >
                    <img className='w-20 mx-auto mt-[0rem] bg-transparent' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 transition-all duration-300 hover:bg-[#17a679]'>Start Trial</button>
                </motion.div>
                <motion.div 
                    className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 sm:mt-16'
                    variants={fadeInAnimationFromCenter}
                    initial = 'initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                >
                    <img className='w-20 mx-auto mt-[0rem] bg-transparent' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                    <p className='text-center text-4xl font-bold'>$199</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>750 GB Storage</p>
                        <p className='py-2 border-b mx-8'>2 Granted Users</p>
                        <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
                    </div>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6  mx-auto px-6 py-3 text-[#00df9a] transition-all duration-300 hover:bg-[#0e2b21]'>Cancel Trial</button>
                </motion.div>
                <motion.div 
                    className='w-full shadow-xl flex flex-col p-4 my-4 mt-16 rounded-lg hover:scale-105 duration-300 sm:mt-16'
                    variants={fadeInAnimationFromRight}
                    initial = 'initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                >
                    <img className='w-20 mx-auto mt-[-3.8rem] bg-transparent' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                    <p className='text-center text-4xl font-bold'>$249</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                        <p className='py-2 border-b mx-8'>3 Granted Users</p>
                        <p className='py-2 border-b mx-8'>Send up to 3 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 transition-all duration-300 hover:bg-[#17a679]'>Start Trial</button>
                </motion.div>
            </div>
        </div>
    )
}

export default Cards;