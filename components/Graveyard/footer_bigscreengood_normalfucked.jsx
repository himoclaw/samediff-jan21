import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

// Footer component
const style = {
  footer: `mt-20 z-0 bg-sd-black py-16 w-full flex justify-center items-center px-8`, // Add the desired padding value (px-8) here
  contentWrapper: `flex flex-col items-center bottom-[1px]`,
  footerIcon: `text-sd-gray text-3xl hover:text-sd-yellow cursor-pointer transition duration-150 ease-in-out transform hover:scale-105`,
  footerText: `opacity-25 font-space-grotesk text-[11px] text-sd-gray mt-6`,
};


const footerTxt = '©2024 SAME DIFFERENCE';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 100, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className={`${style.footer} absolute bottom-0`}>
      <motion.div
        className={style.contentWrapper}
        initial={{ opacity: 0, y: 2 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0 }}
      >
        <Link
          href="https://www.instagram.com/samedifference.tv/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.footerIcon}>
          <FaInstagram className='text-4xl'/>
        </Link>
        <div className={style.footerText}>
          {footerTxt}
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
