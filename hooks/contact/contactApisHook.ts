/* eslint-disable @typescript-eslint/no-explicit-any */
import {publicApi} from '@/apis/axios.config';
import {IFormSubmit} from '@/interfaces/contact/contact.interface';
import {AxiosResponse} from 'axios';

export const sendMailForWork = async (
  url: string,
  data: IFormSubmit
): Promise<any> => {
  try {
    const response = await publicApi.post<AxiosResponse<any>>(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};
