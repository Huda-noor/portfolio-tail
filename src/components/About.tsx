"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='About'>
    <section className="relative text-gray-600 body-font custom-background-animation bg-fixed bg-cover bg-center bg-no-repeat">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="object-cover object-center rounded-lg shadow-lg"
            alt="hero"
            src="/assets/profilepic.JPG"
            width={500}
            height={500}
          />
        </motion.div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-950 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed text-gray-950 "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            As a frontend developer with a strong background in building
            dynamic and responsive web applications, I bring extensive
            experience in leveraging Next.js, Tailwind CSS, and TypeScript to
            create seamless and performant user interfaces. My expertise
            includes developing scalable web solutions, implementing
            modern design principles, and optimizing user experiences.
          </motion.p>
          <div className="flex justify-center ">
            <Link href="/assests/cv/1.pdf">
              <motion.button
                className="inline-flex text-white  bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg transform transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                View CV
              </motion.button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
    </div>
  )
}

export default About