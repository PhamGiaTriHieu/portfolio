'use client';
import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Swiper, SwiperSlide, SwiperClass} from 'swiper/react';
import 'swiper/css';

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import {projectImgList} from '@/constants/works';
import WorkSliderButtons from '@/components/WorkSliderButtons';
import {getProjects} from '@/hooks/projectPage/projectApisHook';
import {IProject} from '@/interfaces/project/project.interface';

const Project = () => {
  const [projectsList, setProjectsList] = useState<IProject[]>([]);
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const response = await getProjects('portfolios/resume/projects');
      setProject(response.projects[0]); // Set the first project as default when the page loads.

      const formattedProjects = response.projects.map((project) => {
        return {
          ...project,
          image: projectImgList[project.num - 1],
        };
      });

      setProjectsList(formattedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  if (!projectsList.length) return <div>Loading...</div>;

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentSlideIndex = swiper.activeIndex;
    setProject(projectsList[currentSlideIndex]);
  };
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Text */}
          <div className="w-full xl:w-[50%] xl-h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project &&
                  `${project?.num < 10 ? '0' + project?.num : project?.num}`}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project?.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project?.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project?.stacks.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item}
                      {index !== project.stacks.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>

              {/* Border */}
              <div className="border border-white/20"></div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project?.live ?? ''} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub Button */}
                <Link href={project?.github ?? ''} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projectsList?.length &&
                projectsList.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                        {/* Image  */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project?.image?.src}
                            fill
                            className="object-cover"
                            quality={100}
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}

              {/* Slider Buttons */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 xl:bottom-0 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] xl:w-[40px] xl:h-[40px] rounded-full xl:rounded-sm flex justify-center items-center transition-all duration-500"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
