import Link from 'next/link';
import React from 'react';
import { SiFacebook, SiFiverr, SiGithub, SiInstagram, SiLinkedin, SiUpwork, SiYoutube } from 'react-icons/si';

const Footer = () => {
  return (
    <div>
      <section className="relative text-gray-600 body-font custom-background-animation bg-fixed bg-cover bg-center bg-no-repeat">
        <footer>
          <div className="container px-5 py-8 mx-auto flex flex-col xl:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                Huda Noor Portfolio
              </span>
              <p className="text-sm sm:text-base md:text-xl text-blue-900 mt-2 md:mt-0 md:ml-4 md:border-l-2 border-gray-500 md:pl-4">
                © 2024  Huda Noor Portfolio
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
