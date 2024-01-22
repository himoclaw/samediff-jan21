import React, { useState } from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footerNew';
import ContactImage from "/public/contact_color_BG3.jpg";
import HoveredImage from "/public/manifesto_overlay_v02.png";
import { motion } from 'framer-motion';

const Contact = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null); // State for tracking hovered link

  // Function to determine link style
  const linkStyle = (linkIndex) => {
    const isOuterLink = linkIndex === 0 || linkIndex === 2;
    return `text-center font-space-mono text-[26px] transition-colors duration-1000 hover:underline ${
      hoveredLink === linkIndex ? 'text-sd-yellow ' : (isOuterLink ? 'text-sd-gray' : 'text-sd-yellow')
    } break-words z-20`;
  };

  // Variants for container and items (for staggering effect)
  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative bg-sd-black w-full h-screen overflow-y-auto overflow-x-hidden">
      <Header className='z-20' />
      
      <div className="relative flex justify-center items-center mt-16 mb-16">
        <motion.div 
          className="relative w-full h-full flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <Image 
          src={ContactImage}
          alt="contact"
          className={`z-10 transition-opacity duration-500 ${isImageHovered ? 'opacity-0' : 'opacity-100'}`}
          style={{ width: '75%', height: 'auto' }}
          />
          
          {/* Second Image */}
          <Image 
            src={HoveredImage} 
            alt="hovered" 
            className={`absolute top-0 left-42 z-20 transition-opacity transition-bezier duration-500 ${isImageHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{ width: '75%', height: 'auto' }}
          />
        </motion.div>

        {/* Email address container with staggering effect */}
        <motion.div
          className="space-x-2 translate-y-80 xl:translate-y-[360px] absolute flex flex-col lg:flex-row justify-center items-center transition-opacity duration-400 z-30"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {['artists', 'brands', 'jobs'].map((type, index) => (
            <motion.a
              key={type}
              href={`mailto:${type}@samedifference.tv`}
              className={linkStyle(index)}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              variants={itemVariants}
            >
              {`${type}@samedifference.tv`}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <Footer className='absolute bottom-0 w-full z-[-1]' />
    </div>
  );
};

export default Contact;
