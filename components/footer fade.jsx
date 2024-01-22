import React, { useState, useEffect } from 'react';
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const style = {
  footer: `bg-transparent bottom-14 w-full flex justify-center items-center px-8 z-0`,
  contentWrapper: `flex flex-col items-center transition-opacity duration-700 ease-in-out`, // Add transition classes
  footerIcon: `text-sd-gray scale-110 hover:text-sd-yellow cursor-pointer transition duration-150 ease-in-out`,
  footerText: `opacity-78 font-space-grotesk text-[8px] text-sd-gray mt-[12px]`,
};

const footerTxt = '©2024 SAME DIFFERENCE';

const Footer = () => {
  const [opacity, setOpacity] = useState('opacity-0'); // Start with opacity 0

  useEffect(() => {
    setOpacity('opacity-100'); // Change to full opacity on mount
  }, []);

  return (
    <div className={style.footer}>
      <div
        className={`${style.contentWrapper} ${opacity}`} // Apply dynamic opacity class
      >
        <Link
          href="https://www.instagram.com/samedifference.tv/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.footerIcon}>
          <FaInstagram className='text-2xl'/>
        </Link>
        <div className={style.footerText}>
          {footerTxt}
        </div>
      </div>
    </div>
  );
};

export default Footer;
