import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoGray from "/public/sd-gray.png";
import LogoYellow from "/public/sd-yellow.png";

const style = {
  header: `relative | z-20 | flex | items-center | bg-transparent | mt-6 | mr-1 | px-6 | max-h-[90px]`,
  headerItem: `flex px-200 font-archivo text-sd-gray hover:text-sd-yellow cursor-pointer hover:underline hover:scale-104`,
  headerFontSize: '1.2rem', // Adjust the font size as needed
  headerLogoSize: 95,
  // hoverEffect: `transition duration-150 ease-in-out transform hover:scale-105`
};

const Header = () => {
  return (
    <nav className={style.header}>
      {/* HeaderLogo */}
      <Link href="/">
        <div className={`flex items-center cursor-pointer group ${style.hoverEffect}`}>
          <Image
            src={LogoGray}
            alt="sd-logo"
            height={style.headerLogoSize}
            width={style.headerLogoSize}
            className="group-hover:hidden"
          />
          <Image
            src={LogoYellow}
            alt="sd-logo"
            height={style.headerLogoSize}
            width={style.headerLogoSize}
            className="hidden group-hover:inline-block"
          />
        </div>
      </Link>

      {/* Header Items */}
      <ul className={`${style.headerItem} text-px-84 ml-auto -pt-1 pr-1.5 ${style.hoverEffect}`}style={{ fontSize: style.headerFontSize }}>
        <li>
          <Link href="/contact">LET&apos;S TALK</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
