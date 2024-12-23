import {NextApiRequest, NextApiResponse} from 'next';
import axios, {AxiosError} from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const targetUrl = 'https://phamgiatrihieu.io.vn';

  try {
    const response = await axios.head(targetUrl);

    res.status(200).json({success: true, status: response.status});
  } catch (error) {
    const axiosError = error as AxiosError;

    console.error('Error checking URL:', axiosError.message);

    const status = axiosError.response?.status || 500;
    res.status(status).json({success: false, status});
  }
}
