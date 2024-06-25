import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { authAPI, LoginData } from '../api/request';
import { useNavigate } from 'react-router-dom';

export const useLoginMutation = () => {
	const navigate = useNavigate();

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

				const refreshToken = res.headers.refreshtoken;
				localStorage.setItem('refreshToken', refreshToken);

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
