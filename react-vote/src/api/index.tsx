import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://testeveytime.shop/';

axios.defaults.withCredentials = true; // 혹시 모르니..

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
	// 쿠키를 포함한 요청을 할 때는 credentials 옵션을 설정해야 한다는 사실..!
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('accessToken');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		} else {
			console.log('토큰x');
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;
