import axios from 'axios';
import {toast} from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // URL gốc cho API
  timeout: 10000, // Thời gian chờ
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor cho request
axiosInstance.interceptors.request.use(
  (config) => {
    // Ví dụ: Thêm token vào header
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Thêm interceptor cho response
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Xử lý nếu token hết hạn hoặc không hợp lệ
      console.error('Unauthorized');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

export const publicApi = axios.create({
  // baseURL: `${process.env.NEXT_PUBLIC_API_LOCAL_URL}:${process.env.PORT}/api/${process.env.VERSION}/`,
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}:3000/api/v1/`,
  timeout: 5000, // Timeout cho mỗi request
  headers: {
    'Content-Type': 'application/json',
  },
});

// **Interceptors để xử lý Request**
publicApi.interceptors.request.use(
  (config) => {
    // Thêm Query Parameters mặc định
    config.params = {
      ...config.params,
    };

    config.headers['Access-Control-Allow-Origin'] = '*';

    // Content-Type for upload file
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }

    return config;
  },
  (error) => {
    // Xử lý lỗi trong Request
    return Promise.reject(error);
  }
);

// **Interceptors để xử lý Response**
publicApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error?.response?.data?.message &&
      Array.isArray(error.response.data.message)
    ) {
      error.response.data.message.forEach((msg: string) => {
        toast.error(msg, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    } else {
      const errorMessage =
        error?.response?.data?.message || 'An error occurred';
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    return Promise.reject(error);
  }
);
