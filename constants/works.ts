import projectImg1 from '@/public/assets/work/thumb1.png';
import projectImg2 from '@/public/assets/work/thumb2.png';
import projectImg3 from '@/public/assets/work/thumb3.png';

export interface IStack {
  name: string;
}
export interface IWork {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: IStack[];
  image: string;
  live: string;
  github: string;
}

export const works: IWork[] = [
  {
    num: '01',
    category: 'frontend',
    title: 'CARA Shop (E-commerce)',
    description:
      'CARA Shop is a modern e-commerce platform built to deliver a seamless shopping experience. Users can browse products by categories, view detailed product pages. The responsive design ensures usability across devices, while JavaScript-based interactions provide a smooth, dynamic user interface.',
    stack: [
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'JavaScript',
      },
    ],
    image: projectImg1.src,
    live: 'https://cara-shop-mall.netlify.app/',
    github: 'https://github.com/Shukajnhon/shop',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Simple Movies',
    description:
      'Simple Movies is a movie discovery web app where users can browse, search. Integrated with Firebase OAuth, users can sign up and log in securely with email accounts. The app utilizes The Movie Database (TMDB) APIs to fetch real-time data on trending movies, top-rated films, genres, and detailed information on each movie.',
    stack: [
      {
        name: 'ReactJS',
      },
      {
        name: 'TailwindCss',
      },
      {
        name: 'Firebase',
      },
    ],
    image: projectImg2.src,
    live: 'https://simple-movies.netlify.app/',
    github: 'https://github.com/Shukajnhon/simple-movies-react',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'NetFlix Clone (UI Clone)',
    description:
      'Netflix Clone is a UI of the popular streaming platform, designed to provide a similar look and feel to the original Netflix interface. Built with ReactJS and styled with Tailwind CSS, the project features a responsive layout.',
    stack: [
      {
        name: 'ReactJS',
      },
      {
        name: 'TailwindCss',
      },
      {
        name: 'Firebase',
      },
    ],
    image: projectImg3.src,
    live: 'https://nextflix-ui-clone.netlify.app',
    github: 'https://github.com/Shukajnhon/netflix-clone-v1',
  },
];
