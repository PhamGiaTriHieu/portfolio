import {ReactNode} from 'react';

export interface ICreatedBy {
  _id: string;
  email: string;
}

interface IWorkExperience {
  position: string;
  company: string;
  _id: string;
  isDeleted: boolean;
  deletedAt?: any;
  duration: string;
}

export interface IExperiences {
  _id: string;
  description: string;
  workExperiences: IWorkExperience[];
  createdBy: ICreatedBy;
  isDeleted: boolean;
  deletedAt?: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface IEducation {
  institution: string;
  degree: string;
  duration: string;
  _id: string;
  isDeleted: boolean;
  deletedAt?: any;
}

export interface IEducations {
  _id: string;
  description: string;
  educations: IEducation[];
  createdBy: ICreatedBy;
  isDeleted: boolean;
  deletedAt?: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ISkillsList {
  icon: ReactNode;
  name: string;
}

interface ISkill {
  name: string;
  _id: string;
  isDeleted: boolean;
  deletedAt?: any;
}

export interface ISkills {
  _id: string;
  description: string;
  skills: ISkill[];
  skillLists?: ISkillsList[];
  createdBy: ICreatedBy;
  isDeleted: boolean;
  deletedAt?: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAboutMe {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  aboutMe: string;
  experience: string;
}
