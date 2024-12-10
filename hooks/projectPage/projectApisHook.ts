import {publicApi} from '@/apis/axios.config';
import {IProjects} from '@/interfaces/project/project.interface';
import {AxiosResponse} from 'axios';

export const getProjects = async (url: string): Promise<IProjects> => {
  try {
    const response = await publicApi.get<AxiosResponse<IProjects>>(url);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
