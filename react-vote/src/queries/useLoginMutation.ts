import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { authAPI, LoginData } from '../api/request';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/cookie';

export const useLoginMutation = () => {
	const navigate = useNavigate();
	// let refreshToken = getCookie('refreshToken');
	//const [cookies] = useCookies(['refreshToken']);

	const QUERY_KEY_LOGIN = 'login';

	const { mutate, isPending, error, isSuccess } = useMutation({
		mutationKey: [QUERY_KEY_LOGIN],
		mutationFn: async (data: LoginData) => {
			const res = await authAPI.login(data);

			if (res.status === 201) {
				alert('로그인 성공!');
				console.log(res);

				const accessToken = res.headers.authorization;
				localStorage.setItem('accessToken', accessToken);

				// 쿠키가 생성될 시간을 대기한 후 쿠키에서 refreshToken 가져오기
				setTimeout(() => {
					const refreshToken = getCookie('refreshToken');
					console.log('refreshToken:', refreshToken); // 확인용 로그
					if (refreshToken) {
						localStorage.setItem('refreshToken', refreshToken);
					} else {
						console.error('Failed to retrieve refreshToken from cookies');
					}
					navigate(`/`);
				}, 1000); // 1초 대기 후 쿠키 읽기
			} else if (res.status === 400) {
				alert('잘못된 아이디/비밀번호입니다.');
			}

			return res.data;
		},
	});

	return {
		login: mutate,
		isPending,
		isSuccess,
		error,
	};
};
