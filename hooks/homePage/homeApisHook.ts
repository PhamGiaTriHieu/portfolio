import {publicApi} from '@/apis/axios.config';
import {IHomeGeneral} from '@/interfaces/home/home.interface';
import {AxiosResponse} from 'axios';

export const getHomeDetail = async (url: string): Promise<IHomeGeneral> => {
  try {
    const response = await publicApi.get<AxiosResponse<IHomeGeneral>>(url);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getUrlCV = async (url: string): Promise<string> => {
  try {
    const response = await publicApi.get<AxiosResponse<string>>(url);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
