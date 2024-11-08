import React from 'react';
import Link from 'next/link';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/phamgiatrihieu',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/hieu-pham-4a0677248',
  },
];

interface ISocialProps {
  containerStyle?: string;
  iconStyle?: string;
}

const Socials = ({containerStyle, iconStyle}: ISocialProps) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className={iconStyle}
          target="_blank"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
