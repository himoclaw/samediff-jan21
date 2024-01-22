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
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-sd-black">
      {/* Header */}
      <Header />

      {/* Video and Logo Container - reduced vertical padding */}
      <div className="flex-grow-0 flex justify-center items-center w-full pointer-events-none -py-20">
        {/* Logo */}
        <motion.div className="absolute z-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
        >
          <Image
            src={LogoGrayCrop}
            alt="sd-logo"
            style={{ width: "84%", objectFit: "cover" }}
          />
        </motion.div>

        {/* Video Component */}
        <motion.div className="relative z-10 w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}        
        >
          <video
            autoPlay
            loop
            muted
            style={{ width: "100%", objectFit: "cover" }}
          >
            <source src="/images/sd_anim_transparent.webm" type="video/webm" />
            <source src="/images/website_bg_v05.mov" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
      
      {/* Typewriter - flex-grow-0 to ensure it doesn't expand */}
      <div className="flex-grow-0 text-center py-4">
        <h1 className="pointer-events-none font-space-grotesk text-[36px] tracking-[.01em] text-sd-gray">
          <Type />
        </h1>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;