import { useMutation } from '@tanstack/react-query';
import { userAPI, JoinData } from '../api/request';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
	const navigate = useNavigate();

	const { mutate, isPending, error, isSuccess } = useMutation({
		mutationKey: ['join'],
		mutationFn: async (data: JoinData) => {
			const res = await userAPI.join(data);
			return res;
		},
		onSuccess: (res: any) => {
			if (res.status === 201) {
				alert('회원가입 성공! 이제 로그인 하세요.');
				navigate(`/login`);
			}
		},
		onError: (error: any) => {
			if (error.response.status === 409) {
				alert('이미 존재하는 아이디/이메일입니다.');
			} else if (error.response.status === 404) {
				alert('존재하지 않는 팀입니다.');
			} else if (error.response.status === 400) {
				alert('잘못된 요청입니다.');
			} else {
				alert('회원가입 오류: ' + error.response.data.message);
			}
		},
	});

	return {
		join: mutate,
		isPending,
		isSuccess,
		error,
	};
};
