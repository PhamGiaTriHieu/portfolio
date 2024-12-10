import {publicApi} from '@/apis/axios.config';
import {
  IAboutMe,
  IEducations,
  IExperiences,
  ISkills,
} from '@/interfaces/resume/resume.interface';
import {AxiosResponse} from 'axios';

export const getExperience = async (url: string): Promise<IExperiences> => {
  try {
    const response = await publicApi.get<AxiosResponse<IExperiences>>(url);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getEducation = async (url: string): Promise<IEducations> => {
  try {
    const response = await publicApi.get<AxiosResponse<IEducations>>(url);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getSkills = async (url: string): Promise<ISkills> => {
  try {
    const response = await publicApi.get<AxiosResponse<ISkills>>(url);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getAboutMe = async (url: string): Promise<IAboutMe> => {
  try {
    const response = await publicApi.get<AxiosResponse<IAboutMe>>(url);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
