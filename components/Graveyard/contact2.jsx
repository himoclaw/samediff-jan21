import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../header';
import Footer from '../footer';
import ContactImage from "/public/contact_color_BG1.png";
import { motion } from 'framer-motion';

const Contact = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isImageHovered, setIsImageHovered] = useState(false); // State for image hover

  const linkStyle = (linkIndex) => {
    const isOuterLink = linkIndex === 0 || linkIndex === 2;
    return `text-center font-space-mono text-3xl sm:text-3xl md:text-4xl lg:text-[25px] xl:text-3xl 2xl:text-4xl transition-colors duration-300 ${
      hoveredLink === linkIndex ? 'text-sd-yellow' : (isOuterLink ? 'text-gray-400' : 'text-sd-gray')
    } break-words`;
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

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 10, transition: { duration: 0.8 } }
  };

  return (
    <div className="relative bg-sd-black w-full h-screen overflow-y-auto">
      <Header className='z-20' />
      
      {/* Main Container */}
      <div className="relative w-full flex justify-center items-center py-12 xs:px-0 sm:px-6 md:px-10 lg:px-20 xl:px-24 2xl:px-36">
        {/* Contact Image with Overlay */}
        <motion.div 
          className="relative w-full h-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <Image src={ContactImage} alt="contact" className={`z-100 transition-opacity duration-500 ${isImageHovered ? 'opacity-20' : 'opacity-100'}`}/>
          
          {/* Overlay */}
          <motion.div
            className={`flex inset-0 bg-black opacity-100 ${isImageHovered ? 'opacity-80' : 'opacity-0'}`}
          />

          {/* Manifesto Text */}
    <div className="absolute translate-y-[-645px]  flex justify-center items-center z-0">
      <motion.div
        className="space-y-6 px-32 text-xl lg:text-xl font-space-mono text-center text-white"
        variants={paragraphVariants}
        initial="hidden"
        animate={isImageHovered ? "visible" : "hidden"}
      >
        <p>
          DIFFERENT VIEWS, SAME VISION.<br /><br />
          SAME DIFFERENCE is a remix of two
          ex-advertising creatives — one obsessed with the idea, the other obsessed
          with the craft. Both with an innate desire to collaborate with
          independent artists who invest in themselves.
        </p><br />
        <p>
          We believe music is the most soulful form of human expression and video
          is the most powerful medium to foster a shared connection. Every song
          should have a music video. Every artist should have a visual album. And
          every brand can make artists partnerships the heart of an integrated campaign. 
          It’s good for brands. And good for artists.<br /><br />
        </p>
        <p>
          Nodding along? Drop us a line.<br /><br />
        </p>
        <p>
          soundsgood@samedifference.tv
        </p>
      </motion.div>
    </div>
        </motion.div>

        {/* Email address container */}
        <motion.div
          className={`translate-y-40 xl:translate-y-60 absolute flex flex-col lg:flex-row justify-center items-center transition-opacity duration-300 ${isImageHovered ? 'opacity-5' : 'opacity-100'}`} // Adjusted for stacking at medium and below breakpoints
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {['artists', 'brands', 'jobs'].map((type, index) => (
            <motion.a
              key={type}
              href={`mailto:${type}@samedifference.tv`}
              className={linkStyle(index) + ' z-20'}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              variants={itemVariants}
            >
              {`${type}@samedifference.tv`}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <Footer className='z-20'/>
    </div>
  );
};

export default Contact;
