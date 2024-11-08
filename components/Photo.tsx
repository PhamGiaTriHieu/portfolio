'use client';
import {motion} from 'framer-motion';
import Image from 'next/image';

import avatar from '@/public/assets/avatar.jpeg';

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {delay: 2, duration: 0.4, ease: 'easeIn'},
        }}
      >
        {/* image */}
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2.2, duration: 0.4, ease: 'easeInOut'},
          }}
          //   className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full mix-blend-lighten absolute"
          className="w-[290px] h-[290px] xl:w-[490px] xl:h-[490px] rounded-full mix-blend-lighten absolute translate-x-[-2px] translate-y-[-3px] xl:translate-x-0 xl:translate-y-0"
        >
          <Image
            src={avatar}
            alt="Avatar"
            quality={100}
            fill
            className="object-contain rounded-full translate-y-2 translate-x-2"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          //   className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
          className="w-[300px] h-[300px] xl:w-[504px] xl:h-[504px]"
          fill="transparent"
          viewBox="0 0 506  506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            // cx="255"
            // cy="255"
            // r="255"
            stroke="#00ff99"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: '24 10 0 0'}}
            animate={{
              strokeDasharray: ['15 120 2555 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
