import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://testeveytime.shop/';

const axiosInstance = axios.create({
	baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		if (!config.url?.includes('/join') && !config.url?.includes('/login')) {
			const token = localStorage.getItem('accessToken');
			if (token && config.headers) {
				config.headers.Authorization = `Bearer ${token}`;
			}
		}
		return config;
	},
	(error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error) => {
		if (!error.response) {
			alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
			return Promise.reject(new Error('Network Error'));
		}

		if (error.response.status === 401) {
			const navigate = useNavigate();

			alert('인증에 실패하였습니다. 다시 로그인 해주세요.');
			localStorage.removeItem('accessToken');
			navigate(`/login`); // 로그인 페이지로 리디렉션
		}

		return Promise.reject(error.response);
	}
);

export default axiosInstance;
