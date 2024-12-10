'use client';
import React, {useEffect, useState} from 'react';
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
import {Controller, useForm} from 'react-hook-form';

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {toast} from 'react-toastify';
import {sendMailForWork} from '@/hooks/contact/contactApisHook';

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
  const {
    handleSubmit,
    control,
    formState: {errors, isValid},
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    // alert(JSON.stringify(data));
    const url = 'mail/for-work';
    try {
      setLoading(true);
      const response = await sendMailForWork(url, data);
      toast.success(response?.data?.message);
      setLoading(false);
      reset();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const onerror = (error: any) => {
    if (error.firstName) {
      toast.error(error?.lastName?.message);
    }
    if (error.lastName) {
      toast.error(error?.lastName?.message);
    }
    if (error.email) {
      toast.error(error?.email?.message);
    }
    if (error.service) {
      toast.error(error?.service?.message);
    }
  };

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
            <form
              onSubmit={handleSubmit(onSubmit, onerror)}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              {/* <p className="text-white/60"></p> */}

              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{required: 'First Name is required'}}
                  render={({field}) => (
                    <Input {...field} type="text" placeholder="Firstname" />
                  )}
                />

                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  rules={{required: 'Last Name is required'}}
                  render={({field}) => (
                    <Input {...field} type="text" placeholder="Last Name" />
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email format',
                    },
                  }}
                  render={({field}) => (
                    <Input {...field} type="text" placeholder="Email" />
                  )}
                />

                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({field}) => (
                    <Input {...field} type="text" placeholder="Phone Number" />
                  )}
                />
              </div>

              {/* Selection */}

              <Controller
                name="service"
                control={control}
                defaultValue=""
                rules={{required: 'Select a service field is required'}}
                render={({field}) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="frontend">
                          Web Development
                        </SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />

              {/* Textarea */}
              <Controller
                name="message"
                control={control}
                defaultValue=""
                // rules={{required: 'Message is required'}}
                render={({field}) => (
                  <Textarea
                    {...field}
                    className="h-[200px]"
                    placeholder="Type your message here"
                  />
                )}
              />

              {/* Button */}
              <div className="flex justify-end w-full">
                <Button
                  disabled={loading}
                  size="md"
                  className="w-[160px] max-w-40"
                  type="submit"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-[#008f7a]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          d="M4 12a8 8 0 018-8v8H4z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="sr-only">Sending...</span>
                    </span>
                  ) : (
                    'Send'
                  )}
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
