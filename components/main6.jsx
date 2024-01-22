import React from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import Type from './Title';
import LogoGrayCrop from "/public/sd-gray-crop.png";
import { motion } from 'framer-motion';

const style = {
  mainComp: `flex flex-col justify-between overflow-x-hidden overflow-y-hidden bg-sd-black min-h-screen min-w-screen z-0`,
  videoLogoContainer: `flex items-center justify-center w-full z-1 relative`,
  typewriterContainer: `w-full text-center mt-22 mb-10`, // Adjusted margin-bottom
};

const Main = () => {
  return (
    <div className={style.mainComp}>
      {/* Header */}
      <Header />

      {/* Video and Logo Container */}
      <div className={style.videoLogoContainer}>
        {/* SD BG Logo */}
        <motion.div 
          className="absolute flex items-center justify-center"
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <Image
            src={LogoGrayCrop}
            alt="sd-logo"
            style={{ width: "75%", objectFit: "cover" }}
          />
        </motion.div>

        {/* Video Component */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 75, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ width: '90%', alignItems: 'center', justifyContent: 'center' }} 
        >
          <video
            autoPlay
            loop
            muted
            style={{ width: '125%', height: '125%', objectFit: 'cover' }}
          >
            <source src="/images/sd_anim_transparent.webm" type="video/webm" />
          </video>
        </motion.div>
      </div>

      {/* Typewriter Container */}
      <div className={style.typewriterContainer}>
        <h1 className="font-space-grotesk font-normal text-sd-gray sm:text-1xl md:text-3xl lg:text-4xl xl:text-4xl">
          <Type />
        </h1>
      </div>

      {/* Footer */}
      <div className='w-full pb-6'>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
