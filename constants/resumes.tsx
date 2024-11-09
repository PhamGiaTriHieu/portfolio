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

interface IItemExperiences {
  company: string;
  position: string;
  duration: string;
}
interface IExperiences {
  icon: any;
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
    ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptatum doloribus odio.',

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
      fileValue: '2 years working in Web Development',
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
    ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptatum doloribus odio.',
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
  icon: any;
  title: string;
  description: string;
  items: IItemEducation[];
}

export const educations: IEducation = {
  icon: BadgeIcon,
  title: 'My education',
  description:
    ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptatum doloribus odio.',
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
  icon: any;
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
    ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptatum doloribus odio.',
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
