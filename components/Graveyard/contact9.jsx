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
  const [hoveredLink, setHoveredLink] = useState(null); // State for tracking hovered link
  const emailContainerRef = useRef(null); // Ref for the email address container
  const marqueeRef = useRef(null);

  const linkStyle = (linkIndex) => {   // Function to determine link style
    const isOuterLink = linkIndex === 0 || linkIndex === 2;
    return `text-center font-space-mono text-[20px] transition-colors hover:underline hover:sd-yellow ${
      hoveredLink === linkIndex ? 'text-sd-yellow ' : (isOuterLink ? 'text-sd-gray' : 'text-sd-gray')
    } break-words z-20`;
  };

  const containerVariants = {   // Variants for container and items (for staggering effect)
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.9 } },
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
      
      <div className="relative flex justify-center items-center mt-16 mb-16"> 
        <motion.div                       // This here is the image container, the parent of all the image mallarchy
          className="relative w-full h-full flex flex-col items-center"
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          {/* Desktop Image */}
          <Image 
            src={ContactImage}
            alt="contact"
            className={`z-10 transition-opacity easeOut duration-1000 ${isImageHovered ? 'opacity-0' : 'opacity-100'}`}
            style={{ width: '60%', height: 'auto' }}
          />
           {/* Mobile Image */}
          <Image 
            src={ContactImageMobile} 
            alt="contact" 
            className={`z-10 transition-opacity duration-1000 easeOut ${isImageHovered ? 'opacity-20' : 'opacity-100'} block md:hidden`}
          />

          {/* Desktop Hovered Image */}
          <Image 
            src={HoveredImage} 
            alt="hovered" 
            className={`absolute top-0 left-42 z-20 transition-opacity duration-1000 easeOut ${isImageHovered ? 'opacity-100' : 'opacity-0'}`}  // Adjust duration and ease here
            style={{ width: '60%', height: 'auto' }}
          />

          {/* Mobile Hovered Image */}
          <Image 
            src={HoveredImageMobile} 
            alt="hovered" 
            className={`absolute top-0 left-0 z-20 transition-opacity duration-1000 easeOut ${isImageHovered ? 'opacity-100' : 'opacity-0'} block md:hidden`}
          />

          {/* Email address container with staggering effect */}
        <motion.div
            ref={emailContainerRef} //e-mail styling, font sizing, mobile layout and what have you
            className="absolute bottom-0 space-x-4 absolute flex flex-col lg:flex-row justify-center transition-opacity duration-300 z-30"
            style={{ maxWidth: '60%', margin: '0 auto' }} // Set your desired width
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
           {/* Add the marquee tag */}
        <marquee
           ref={marqueeRef} 
           behavior="marquee" 
           direction="left"
           scrollamount="6.5"
           loop
            onMouseEnter={() => marqueeRef.current.stop()}
            onMouseLeave={() => marqueeRef.current.start()}
        >
        {['artists', 'brands', 'jobs'].map((type, index) => (
          <React.Fragment key={type}>
            <motion.a
              key={`${type}-repeat`}
              href={`mailto:${type}@samedifference.tv`}
              className={linkStyle(index)}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              variants={itemVariants}
              style={{
                fontSize: '32px', // Adjust the scaling factor as needed
              }}
              >
              {`${type}@samedifference.tv`}
            </motion.a>
              &nbsp; &nbsp; &nbsp;
          </React.Fragment>
          ))}
          
          {/* Repeat the entire array to avoid gaps */}
          {['artists', 'brands', 'jobs'].map((type, index) => (
            <React.Fragment key={`${type}-repeat`}>
            <motion.a
              key={`${type}-repeat`}
              href={`mailto:${type}@samedifference.tv`}
              className={linkStyle(index)}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              variants={itemVariants}
              style={{
                fontSize: '32px', // Adjust the scaling factor as needed
              }}
            >
              {`${type}@samedifference.tv`}
            </motion.a>
            {/* Add a space (non-breaking space in this case) */}
            &nbsp; &nbsp; &nbsp;
            </React.Fragment>
          ))}

          {/* Repeat the entire array to avoid gaps */}
          {['artists', 'brands', 'jobs'].map((type, index) => (
            <React.Fragment key={`${type}-repeat`}>
            <motion.a
              key={`${type}-repeat`}
              href={`mailto:${type}@samedifference.tv`}
              className={linkStyle(index)}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              variants={itemVariants}
              style={{
                fontSize: '32px', // Adjust the scaling factor as needed
              }}
            >
              {`${type}@samedifference.tv`}
            </motion.a>
            {/* Add a space (non-breaking space in this case) */}
            &nbsp; &nbsp; &nbsp; &nbsp;
            </React.Fragment>
          ))}

          </marquee>
        </motion.div>
       </motion.div>
      </div>

      <Footer className='absolute bottom-0 w-full z-[-1]' />
    </div>
  );
};

export default Contact;
