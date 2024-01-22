import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import ContactImage from "/public/images/manifesto_image_1.15.jpg";
import ContactImageMobile from "/public/contact_color_BG3_mobile.jpg";
import HoveredImage from "/public/manifesto_overlay_v03.png";
import HoveredImageMobile from "/public/manifesto_overlay_v01_mobile.png";
import { motion } from 'framer-motion';

const Contact = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [emailArray, setEmailArray] = useState(['artists', 'brands', 'jobs']);

  useEffect(() => { // Scrolling email links
    const interval = setInterval(() => {
      setEmailArray(prevArray => {
        const newEmail = ['artists', 'brands', 'jobs'][(prevArray.length) % 3];
        return [...prevArray, newEmail];
      });
    }, 9);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-sd-black w-full h-screen overflow-y-hidden overflow-x-hidden">
      <Header className='z-20' />
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="relative flex flex-col items-center">
          {/* Desktop Image */}
          <Image
            src={ContactImage}
            alt="contact"
            className="z-10 transition-opacity ease-out duration-[1.2s] hover:opacity-5"
            style={{ width: '50%', height: 'auto' }}
          />

          {/* Overlay Image */}
          <Image
            src={HoveredImage}
            alt="hovered"
            className="absolute top-0 left-0 transition-opacity duration-800 ease-out opacity-0 hover:opacity-100"
            style={{ width: '50%', height: 'auto' }}
          />
        </div>

        {/* Email address container with staggering effect */}
        <div className="absolute bottom-[-10px] space-x-1 absolute flex flex-col lg:flex-row justify-center transition-opacity duration-200 z-30" style={{ maxWidth: '50%', margin: 'auto' }}>
          <marquee
            behavior="marquee scroll"
            direction="left"
            animation="marquee"
            scrollamount="1.7"
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '100%',
              textIndent: '-98%',
            }}
          >
            {emailArray.map((type, typeIndex) => (
              <React.Fragment key={`${type}-${typeIndex}`}>
                <a
                  href={`mailto:${type}@samedifference.tv`}
                  className={`text-center font-archivo font-150 tracking-tight transition-colors break-words z-20 ${hoveredLink === typeIndex ? 'text-sd-yellow underline' : 'text-sd-gray'}`}
                  onMouseEnter={() => setHoveredLink(typeIndex)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    fontSize: '28px',
                  }}
                >
                  {`${type}@samedifference.tv`}
                </a>
                &nbsp; &nbsp;
              </React.Fragment>
            ))}
          </marquee>
        </div>
      </motion.div>

      <Footer className='absolute bottom-0 w-full z-[-1]' />
    </div>
  );
};

export default Contact;
