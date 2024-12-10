import {ICreatedBy} from '@/interfaces/resume/resume.interface';

export interface IProject {
  num: number;
  category: string;
  title: string;
  description: string;
  live: string;
  image: any;
  imageUrl?: string | null;
  github: string;
  stacks: string[];
  _id: string;
  isDeleted: boolean;
  deletedAt?: any;
}

export interface IProjects {
  _id: string;
  projects: IProject[];
  createdBy: ICreatedBy;
  isDeleted: boolean;
  deletedAt?: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
