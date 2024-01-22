import React from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footerNew';
import Type from './Title';
import LogoGrayCrop from "/public/sd-gray-crop.png";
import { motion } from 'framer-motion';

const style = {
  mainComp: `overflow-x-hidden overflow-y-auto bg-sd-black min-h-screen min-w-screen`,
  contentContainer: `flex-1 flex flex-col justify-center items-center overflow-hidden min-h-screen`,
};

const Main = () => {
  return (
    <div className="flex flex-col overflow-x-hidden bg-sd-black min-h-screen">
      {/* Header */}
      <Header />

      {/* Video and Logo Container */}
      <div 
        className="flex-grow-0 flex items-center justify-center w-full h-screen -mt-40 scale-90"
        style={{ width: '100%', height: 'auto' }}
        >

        {/* SD BG Logo */}
        <motion.div 
        className="absolute z-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.7, delay: 0 }}
        
        >
          <Image
            src={LogoGrayCrop}
            alt="sd-logo"
            style={{ width: "74%", objectFit: "cover",}}
          />
        </motion.div>

        {/* Video Component */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 75, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ width: '85%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
        >
          <video
            autoPlay
            loop
            muted
            style={{ width: '120%', height: '120%', objectFit: 'cover' }}
          >
            <source src="/images/sd_anim_transparent.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
      
      {/* Typewriter - flex-grow-0 to ensure it doesn't expand */}
      <div className="flex-grow-0 text-center -translate-y-[240px] top:0 z-16">
        <h1 className=
        "font-space-grotesk font-bold text-[48px] text-sd-gray leading-tight tracking-tight lg:text-[58px] md:text-[30px] sm:text-[26px] xs:text-[18px]"
        >
          <Type />
        </h1>
      </div>

      {/* Footer */}
      <Footer className='absolute bottom-0 w-full z-[-1]' />
    </div>
  );
};

export default Main;