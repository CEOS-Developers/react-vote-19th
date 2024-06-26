import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://testeveytime.shop/';

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
			console.log('Authorization header set:', config.headers.Authorization); // 로그 추가
		} else {
			console.log('No token found');
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

/*
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
*/
export default axiosInstance;
