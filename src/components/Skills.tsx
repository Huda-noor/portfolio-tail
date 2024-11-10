import React from 'react'
import { AiOutlineCheckSquare } from "react-icons/ai";


const Skill = () => {
  return (
    <div id="skills">
      <section className="relative text-gray-600 body-font custom-background-animation bg-fixed bg-cover bg-center bg-no-repeat">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-7xl py-7 font-bold text-teal-500 tracking-widest title-font mb-1">
              Skills
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Skill 1 */}
            <div className="p-4 w-full md:w-1/3 transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:text-white">
              <div className="flex rounded-lg h-full p-8 flex-col bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <AiOutlineCheckSquare />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">HTML</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-600 h-1 rounded-xl" style={{ width: '100%' }}></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">100%</p>
                </div>
              </div>
            </div>
            {/* Skill 2 */}
            <div className="p-4 w-full md:w-1/3 transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:text-white">
              <div className="flex rounded-lg h-full p-8 flex-col bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <AiOutlineCheckSquare />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">CSS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-600 h-1 rounded-xl" style={{ width: '95%' }}></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">95%</p>
                </div>
              </div>
            </div>
            {/* Additional Skills */}
            {/* Repeat the structure as needed for each skill */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
