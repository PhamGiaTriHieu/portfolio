'use client';

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {ScrollArea} from '@/components/ui/scroll-area';
import {motion} from 'framer-motion';
import {IAbout, icons} from '@/constants/resumes';
import {useEffect, useState} from 'react';
import {
  IAboutMe,
  IEducations,
  IExperiences,
  ISkills,
} from '@/interfaces/resume/resume.interface';
import {
  getAboutMe,
  getEducation,
  getExperience,
  getSkills,
} from '@/hooks/resumePage/resumeApisHook';

enum EResumeTab {
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  SKILLS = 'skills',
  ABOUTME = 'aboutMe',
}

const Services = () => {
  const [experiences, setExperiences] = useState<IExperiences>();
  const [edu, setEdu] = useState<IEducations>();
  const [skills, setSkills] = useState<ISkills>();
  const [aboutMe, setAboutMe] = useState<IAbout>();

  const [selectedTab, setSelectedTab] = useState('experience');

  useEffect(() => {
    if (selectedTab === EResumeTab.EXPERIENCE) {
      if (experiences) return;
      fetchExperiences();
    }

    if (selectedTab === EResumeTab.EDUCATION) {
      if (edu) return;
      fetchEducation();
    }

    if (selectedTab === EResumeTab.SKILLS) {
      if (skills) return;
      fetchSkills();
    }

    if (selectedTab === EResumeTab.ABOUTME) {
      if (aboutMe) return;
      fetchAboutMe();
    }
  }, [selectedTab]);

  const fetchExperiences = async () => {
    try {
      const response = await getExperience('portfolios/resume/experiences');
      setExperiences(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEducation = async () => {
    try {
      const response = await getEducation('portfolios/resume/education');
      setEdu(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSkills = async () => {
    try {
      const response = await getSkills('portfolios/resume/skills');
      const mapSkillsToIcons = (skills: {name: string}[]) => {
        return skills.map((skill) => {
          const IconComponent = icons[skill.name as keyof typeof icons];
          return {
            name: skill.name,
            icon: IconComponent ? <IconComponent /> : null,
          };
        });
      };

      const skillLists = mapSkillsToIcons(response.skills);
      const formattedData = {...response, skillLists};

      setSkills(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAboutMe = async () => {
    try {
      const response = await getAboutMe('portfolios/resume/about-me');

      const info = [
        {
          fileName: 'FullName',
          fileValue: response.fullName,
        },
        {
          fileName: 'Phone',
          fileValue: `(+84) ${response.phoneNumber.slice(1)}`,
        },
        {
          fileName: 'Experiences',
          fileValue: `${response.experience} Years working in Web Development`,
        },
        {
          fileName: 'Email',
          fileValue: response.email,
        },
        {
          fileName: 'Address',
          fileValue: response.address,
        },
      ];

      const formattedAboutMe = {
        description: response.aboutMe,
        info,
      };

      setAboutMe(formattedAboutMe);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickTab = (value: string) => {
    setSelectedTab(value);
  };

  if (!experiences) return null;

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
      }}
      className="min-h-[80px] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue={EResumeTab.EXPERIENCE}
          className="flex flex-col xl:flex-row gap-[60px]"
          onValueChange={(value) => handleClickTab(value)}
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value={EResumeTab.EXPERIENCE}>Experience</TabsTrigger>
            <TabsTrigger value={EResumeTab.EDUCATION}>Education</TabsTrigger>
            <TabsTrigger value={EResumeTab.SKILLS}>Skills</TabsTrigger>
            <TabsTrigger value={EResumeTab.ABOUTME}>About Me</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value={EResumeTab.EXPERIENCE} className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">My experience</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiences?.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences?.workExperiences.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value={EResumeTab.EDUCATION} className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">My education</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {edu?.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {edu?.educations.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value={EResumeTab.SKILLS} className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">My skills</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills?.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills?.skillLists?.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent
              value={EResumeTab.ABOUTME}
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">About Me</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {aboutMe?.description}
                </p>
                <ul className="grid grid-cols-1  gap-6 max-w-[620px] mx-auto xl:mx-0">
                  {aboutMe?.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item?.fileName}:</span>
                        <div className="flex flex-wrap max-w-[200px] xl:max-w-none">
                          <span className="text-lg">{item.fileValue}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Services;
