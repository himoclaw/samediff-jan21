import React, { useState } from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footerNew';
import ContactImage from "/public/contact_color_BG1.png";
import HoveredImage from "/public/manifesto_overlay_v01.png";
import { motion } from 'framer-motion';

const Contact = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div className="relative bg-sd-black w-full h-screen overflow-y-auto overflow-x-hidden">
      <Header className='z-20' />
      
      <div className="relative w-full flex justify-center items-center py-12 min-h-screen">
        <motion.div 
          className="relative w-full h-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <Image src={ContactImage} alt="contact" className={`z-10 transition-opacity duration-500 ${isImageHovered ? 'opacity-20' : 'opacity-100'}`}/>
          
          {/* Second Image */}
          <Image 
            src={HoveredImage} 
            alt="hovered" 
            className={`absolute top-0 left-0 z-20 transition-opacity duration-500 ${isImageHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </motion.div>

        {/* Email address container */}
        <motion.div
          className="translate-y-80 xl:translate-y-[360px] absolute flex flex-col lg:flex-row justify-center items-center transition-opacity duration-300 z-30"
          initial="hidden"
          animate="visible"
        >
          {['artists', 'brands', 'jobs'].map((type, index) => (
            <a
              key={type}
              href={`mailto:${type}@samedifference.tv`}
              className="text-center font-space-mono text-3xl transition-colors duration-300 text-gray-400 break-words z-20"
            >
              {`${type}@samedifference.tv`}
            </a>
          ))}
        </motion.div>
      </div>

      <Footer className='absolute bottom-0 w-full z-[-1]'/>
    </div>
  );
};

export default Contact;
