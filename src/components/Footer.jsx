import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
import { delay, motion } from 'framer-motion';

const fadeInAnimationTitle = {
    initial: {
      opacity: 0,
      x:-300,
    },
    animate: {
      transition: {
        duration: 1,
      },
      opacity: 1,
      x:0,
    }
  }

  const fadeInAnimationSubtitle = {
    initial: {
      opacity: 0,
      x:-300,
    },
    animate: {
      transition: {
        duration: 1,
        delay: 1
      },
      opacity: 1,
      x:0,
    }
  }
  const fadeInAnimationFirst = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      transition: {
        duration: .5,
        delay: 2,
      },
      opacity: 1,
      x:0,
    }
  }
  const fadeInAnimationSecond = {
    initial: {
      opacity: 0,
      y:50,
    },
    animate: {
      transition: {
        duration: .5,
        delay: 2.5,
      },
      opacity: 1,
      y:0,
    }
  }
  const fadeInAnimationThird = {
    initial: {
      opacity: 0,
      y:50,
    },
    animate: {
      transition: {
        duration: .5,
        delay: 3,
      },
      opacity: 1,
      y:0,
    }
  }
  const fadeInAnimationFourth = {
    initial: {
      opacity: 0,
      x:50,
    },
    animate: {
      transition: {
        duration: 1,
        delay: 3.5,
      },
      opacity: 1,
      x:0,
    }
  }




const Footer = () => {
    return (
        <div className="max-w-[1240px] overflow-hidden  mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <motion.h1 
                    className="w-full text-3xl font-bold text-[#00df9a]"
                    variants={fadeInAnimationTitle}
                    initial = 'initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                >
                    REACT
                </motion.h1>
                <motion.p 
                    className="py-4"
                    variants={fadeInAnimationSubtitle}
                    initial = 'initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit mollitia tempore!
                
                </motion.p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaFacebookSquare size={30}/>
                    <FaTwitterSquare size={30} />
                    <FaDribbbleSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaInstagram size={30} />
                </div>
            </div>
            <div className="lg:col-span-3 flex justify-between mt-6">
                <motion.div
                    variants={fadeInAnimationFirst}
                    initial = 'initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                >
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationSecond}
                    initial = 'initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                >
                    <h6 className="font-medium text-gray-400">Support</h6>
                    <ul>
                        <li className="py-2 text-sm">Pricing</li>
                        <li className="py-2 text-sm">Documentation</li>
                        <li className="py-2 text-sm">Guides</li>
                        <li className="py-2 text-sm">API Status</li>
                    </ul>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationThird}
                    initial = 'initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                >
                    <h6 className="font-medium text-gray-400">Company</h6>
                    <ul>
                        <li className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Blog</li>
                        <li className="py-2 text-sm">Jobs</li>
                        <li className="py-2 text-sm">Press</li>
                        <li className="py-2 text-sm">Careers</li>
                    </ul>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationFourth}
                    initial = 'initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                >
                    <h6 className="font-medium text-gray-400">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm">Claim</li>
                        <li className="py-2 text-sm">Policy</li>
                        <li className="py-2 text-sm">Terms</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default Footer;