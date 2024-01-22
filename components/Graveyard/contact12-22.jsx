import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footerNew';
import ContactImage from "/public/contact_color_BG3.jpg";
import ContactImageMobile from "/public/contact_color_BG3_mobile.jpg";
import HoveredImage from "/public/manifesto_overlay_v01.png";
import HoveredImageMobile from "/public/manifesto_overlay_v01_mobile.png";
import { motion } from 'framer-motion';

const Contact = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const marqueeRef = useRef(null);

  const linkStyle = (linkIndex) => {
    const isOuterLink = linkIndex === 0 || linkIndex === 2;
    return `text-center font-space-mono text-5xl transition-colors duration-300 hover:underline ${
      hoveredLink === linkIndex ? 'text-sd-yellow' : (isOuterLink ? 'text-sd-gray' : 'text-sd-gray')
    } break-words z-20`;
  };

  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const handleMouseEnter = () => {
    setIsImageHovered(true);
    marqueeRef.current.stop();
  };

  const handleMouseLeave = () => {
    setIsImageHovered(false);
    marqueeRef.current.start();
  };
  
  return (
    <div className="relative bg-sd-black w-full h-screen overflow-y-auto overflow-x-hidden">
      <Header className='z-20' />
      
      <div className="relative w-full flex justify-center items-center mt-4 lg:mt-16 mb-24 lg:mb-16">
        <motion.div 
          className="relative w-full h-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          {/* Desktop Image */}
          <Image 
            src={ContactImage} 
            alt="contact" 
            className={`z-10 transition-opacity duration-500 ${isImageHovered ? 'opacity-20' : 'opacity-100'} hidden md:block`}
          />
          
          {/* Mobile Image */}
          <Image 
            src={ContactImageMobile} 
            alt="contact" 
            className={`z-10 transition-opacity duration-500 ${isImageHovered ? 'opacity-20' : 'opacity-100'} block md:hidden`}
          />

          {/* Desktop Hovered Image */}
          <Image 
            src={HoveredImage} 
            alt="hovered" 
            className={`absolute top-0 left-0 z-20 transition-opacity duration-500 ${isImageHovered ? 'opacity-100' : 'opacity-0'} hidden md:block`}
          />

          {/* Mobile Hovered Image */}
          <Image 
            src={HoveredImageMobile} 
            alt="hovered" 
            className={`absolute top-0 left-0 z-20 transition-opacity duration-500 ${isImageHovered ? 'opacity-100' : 'opacity-0'} block md:hidden`}
          />
        </motion.div>

        <motion.div
          ref={marqueeRef}
          className="absolute top-full mt-4 md:mt-8 flex flex-col lg:flex-row justify-center items-center transition-opacity duration-300 z-30"
          // Adjusted positioning for different breakpoints
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Add the marquee tag */}
          <marquee behavior="scroll" direction="left" scrollamount="8">
            {['artists', 'brands', 'jobs'].map((type, index) => (
              <a
                key={type}
                href={`mailto:${type}@samedifference.tv`}
                className={linkStyle(index)}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {`${type}@samedifference.tv`}
              </a>
            ))}
          </marquee>
        </motion.div>
      </div>

      <Footer className='absolute bottom-0 w-full z-[-1]'/>
    </div>
  );
};

export default Contact;
