import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import ContactImage from "/public/images/manifesto_image_1.15.jpg";
import ContactImageMobile from "/public/contact_color_BG3_mobile.jpg";
import HoveredImage from "/public/images/manifesto_overlay_v04.png";
import HoveredImageMobile from "/public/manifesto_overlay_v01_mobile.png";
import { motion } from 'framer-motion';

const Contact = () => {
  // State and refs setup
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const emailContainerRef = useRef(null);
  const marqueeRef = useRef(null);
  const [emailArray, setEmailArray] = useState(['artists', 'brands', 'jobs']);
  
  // Function to determine link styles based on index
  const linkStyle = (linkIndex) => {
    const isOuterLink = linkIndex === 0 || linkIndex === 2;
    return `text-center | font-archivo | font-150 | tracking-tight | transition-colors | hover:underline hover:sd-yellow | ${
      hoveredLink === linkIndex ? 'text-sd-yellow ' : (isOuterLink ? 'text-sd-gray' : 'text-sd-gray')
    } break-words z-20`;
  };
  
  // Variants for container and item animations
  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 0, opacity: 1 },
    visible: { y: 0, opacity: 1, transition: { duration: 0 } },
  };
  
  // Effect to continuously update emailArray with a staggered interval
  useEffect(() => {
    const interval = setInterval(() => {
      setEmailArray(prevArray => {
        const newEmail = ['artists', 'brands', 'jobs'][(prevArray.length) % 3];
        return [...prevArray, newEmail];
      });
    }, 4);

    return () => clearInterval(interval);
  }, []);
  
  // Rendered JSX for the Contact component
  return (
    <div className="relative bg-sd-black w-full min-h-screen"> 
      <Header className='z-20' /> 
      <div className=" | flex | justify-center | items-center | mt-8 | pt-8 | mx-auto"> {/* Container for the Middle Image */}
        <motion.div                       
          className="relative | flex | flex-col | items-center" //****This is the part I think needs to be fixed as this container has the right height but the width goes the whole screen ******
          initial={{ opacity: 0, y: 0}}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        
        >
          {/* Desktop Image */}
          <Image
            src={ContactImage}
            alt="contact"
            className={`z-10 | transition-opacity | easeOut duration-[1.3s] ${
              isImageHovered ? 'opacity-5' : 'opacity-100'
            }`}
            style={{ width: '48%', height: 'auto' }}
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            
          />
          {/* Desktop Hovered Image */}
          <Image 
            src={HoveredImage} 
            alt="hovered" 
            className={`absolute | top-0 | left-42 | z-20 | transition-opacity duration-1000 easeOut | ${isImageHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{ width: '48%', height: 'auto' }}
          
          />
          {/* Email address container with staggering effect */}
          <motion.div
            ref={emailContainerRef}
            className="absolute | bottom-[-10px] | space-x-1 | absolute | flex flex-col | justify-center | transition-opacity duration-200 | z-30"
            style={{ maxWidth: '48%', margin: 'auto' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Scrolling Marquee Effect Area */}
            <marquee
              ref={marqueeRef} 
              behavior="marquee scroll" 
              direction="left"
              animation="marquee" 
              scrollamount="1.5" // speed of the scroll
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                width: '100%',
                textIndent: '-98%',
              }}
            >
              {emailArray.map((type, typeIndex) => (
                <React.Fragment key={`${type}-${typeIndex}`}>
                  <motion.a
                    href={`mailto:${type}@samedifference.tv`}
                    className={linkStyle(typeIndex)}
                    onMouseEnter={() => setHoveredLink(typeIndex)}
                    onMouseLeave={() => setHoveredLink(null)}
                    variants={itemVariants}
                    style={{
                      fontSize: '16px',
                    }}
                  >
                    {`${type}@samedifference.tv`}
                  </motion.a>
                  &nbsp; &nbsp; 
                </React.Fragment>
              ))}
            </marquee>
          </motion.div>
        </motion.div>
      </div>

      <Footer className='w-full | z-[-1]' style={{ bottom: '0' }} />
    </div>
  );
};

export default Contact;
