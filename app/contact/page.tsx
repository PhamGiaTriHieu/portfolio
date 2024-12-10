'use client';
import React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {Textarea} from '@/components/ui/textarea';

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa';
import {motion} from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone Number',
    description: '(+84) 975 404 540',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'phamgiatrihieu@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Tan Binh, HCM city, Vietnam',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              {/* <p className="text-white/60"></p> */}

              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone Number" />
              </div>

              {/* Selection */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="frontend">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile App</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />

              {/* Button */}
              <div className="flex justify-end w-full">
                <Button size="md" className="w-[160px] max-w-40">
                  Send
                </Button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-none">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent flex items-center justify-center rounded-md">
                      <div className="text-[24px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      {['Phone Number', 'Email'].includes(item.title) ? (
                        <a
                          href={`${
                            item.title.includes('Phone') ? 'tel' : 'mailTo'
                          }:${item.description}`}
                        >
                          <h3 className="text-xl">{item.description}</h3>
                        </a>
                      ) : (
                        <h3 className="text-xl">{item.description}</h3>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
