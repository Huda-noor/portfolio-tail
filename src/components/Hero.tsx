
"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from "typewriter-effect";
import Link from 'next/link';
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const Hero = () => {
  return (
    <section className="relative text-gray-600 body-font custom-background-animation bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
          <motion.h1
            className="title-font sm:text-3xl text-4xl md:text-6xl mb-6 font-bold text-gradient"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-green-800 text-5xl lg:inline-block">
              {`I'm`} <br />
              <Typewriter
                options={{
                  strings: ["Frontend Web Developer "],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 50
                }}
              />
            </p>
          </motion.h1>
          <div className='w-[100px] h-[5px] bg-blue-500 mb-6'></div>
          <p className="mb-8 leading-relaxed text-black text-[1.3rem]">
            Experienced Frontend Web Developer | Expert in Typescript, JavaScript, Node.js, React.js, Next.js, HTML, CSS | Participant in Piaic and Governor Initiative of Artificial Intelligence
          </p>
          <div className="flex justify-center">
            <Link href="#Contact">
              <motion.button
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg transform transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                Contact
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <motion.div
            className="relative w-full h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
          >
            <Image
              className="object-cover object-center rounded mx-auto w-full h-auto"
              alt="hero"
              height={500}
              width={500}
              src="/assests/profilepic.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Export the component with dynamic import
export default dynamic(() => Promise.resolve(Hero), { ssr: false });
