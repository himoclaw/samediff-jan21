import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const style = {
  footer: `bg-transparent mt-6 py-8 fixed bottom-0 left-0 w-full`,
  footerIcon: `flex justify-center pb-4 py-20 text-sd-gray text-3xl px-2 hover:text-sd-yellow cursor-pointer`,
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
    <div ref={ref} className={style.footer}>
      <motion.div
        className={style.footerIcon}
        initial={{ opacity: 0, y: 10 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <Link
          href="https://www.instagram.com/samedifference.tv/"
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram className='text-2xl'/>
        </Link>
      </motion.div>

      <motion.ul
        className="flex text-[10px] text-sd-gray justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: .3, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <li>{footerTxt}</li>
      </motion.ul>
    </div>
  );
};

export default Footer;
