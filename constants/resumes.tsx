import BadgeIcon from '@/public/assets/resume/badge.svg';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGit,
} from 'react-icons/fa';
import {BiLogoTypescript} from 'react-icons/bi';
import {SiTailwindcss, SiNextdotjs, SiNestjs} from 'react-icons/si';
import {ReactNode} from 'react';

interface IItemExperiences {
  company: string;
  position: string;
  duration: string;
}
interface IExperiences {
  icon: unknown;
  title: string;
  description: string;
  items: IItemExperiences[];
}

interface IInfo {
  fileName: string;
  fileValue: string;
}

interface IAbout {
  title: string;
  description: string;
  info: IInfo[];
}

export const about: IAbout = {
  title: 'About Me',
  description:
    'I am a passionate Web and Mobile Developer. With a strong foundation in both front-end and a little bit of back-end technologies. I’m always eager to learn new tools and technologies to improve my skills and stay up-to-date with industry trends. My goal is to deliver seamless web experiences that are both functional and enjoyable to use.',

  info: [
    {
      fileName: 'FullName',
      fileValue: 'Pham Gia Tri Hieu',
    },
    {
      fileName: 'Phone',
      fileValue: '(+84) 975 404 540',
    },
    {
      fileName: 'Experiences',
      fileValue: '2 Years working in Web Development',
    },
    {
      fileName: 'Email',
      fileValue: 'phamgiatrihieu@gmail.com',
    },
    {
      fileName: 'Address',
      fileValue: 'Tan Binh, HCM city, Vietnam',
    },
  ],
};

export const experiences: IExperiences = {
  icon: BadgeIcon,
  title: 'My experience',
  description:
    'I have developed my skills as a software developer over the past 2 years, working on various projects that enhanced my expertise in multiple technologies and methodologies.',
  items: [
    {
      company: 'Cherry Solutions',
      position: 'Software Developer',
      duration: '2023 - Present',
    },
    {
      company: 'StartUp Studio',
      position: 'Freelance Front-End Web Developer',
      duration: '2022 - 2023',
    },
  ],
};

interface IItemEducation {
  institution: string;
  degree: string;
  duration: string;
}

interface IEducation {
  icon: unknown;
  title: string;
  description: string;
  items: IItemEducation[];
}

export const educations: IEducation = {
  icon: BadgeIcon,
  title: 'My education',
  description:
    'Below is my educational background related to the web development field:',
  items: [
    {
      institution: 'KITS (Korea IT school)',
      degree: 'Front-End Web Developer',
      duration: 'May 2023 - Aug 2023',
    },
    {
      institution: 'Online Course (Udemy)',
      degree: 'Full Stack Web Development Bootcamp',
      duration: '2022-2023',
    },
    {
      institution: 'FPT JETKING',
      degree: 'Degree in Computer Science and Networking',
      duration: '2018-2022',
    },
  ],
};

interface IItemSkills {
  icon: ReactNode;
  name: string;
}
interface ISkills {
  title: string;
  description: string;
  skillLists: IItemSkills[];
}

export const skills: ISkills = {
  title: 'My skills',
  description:
    'Below are the skills and programming languages I have learned and used in my projects:',
  skillLists: [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS3',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <BiLogoTypescript />,
      name: 'TypeScript',
    },
    {
      icon: <FaReact />,
      name: 'ReactJs',
    },
    {
      icon: <FaGit />,
      name: 'Git',
    },
    {
      icon: <SiNextdotjs />,
      name: 'NextJs',
    },
    {
      icon: <SiNestjs />,
      name: 'NestJs',
    },
    {
      icon: <FaNodeJs />,
      name: 'NodeJS',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
  ],
};
