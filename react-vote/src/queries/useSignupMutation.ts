import { useMutation } from '@tanstack/react-query';
import { userAPI, JoinData } from '../api/request';
import { useNavigate } from 'react-router-dom';

export const useSignupMutation = () => {
	const navigate = useNavigate();

	const { mutate, isPending, error, isSuccess, status } = useMutation({
		mutationKey: ['join'],
		mutationFn: async (data: JoinData) => {
			const res = await userAPI.join(data);

			console.log(error.message);

			console.log(res.status);
			if (res.status === 201) {
				alert('회원가입 성공! 이제 로그인 하세요.');
				navigate(`/login`);
			} /*else if (res.status === 409) {
				alert('이미 존재하는 아이디/이메일입니다.');
			} else if (res.status === 404) {
				alert('존재하지 않는 팀입니다.');
			} else if (res.status === 400) {
				alert(' 요청입니다.');
			} else {
				alert('회원가입 오류: ' + res.data.message);
			}*/

			return res.data;
		},

		onError: (error: any) => {
			if (error.response.status === 409) {
				alert('이미 존재하는 아이디/이메일입니다.');
			} else if (error.response.status === 404) {
				alert('존재하지 않는 팀입니다.');
			} else if (error.response.status === 400) {
				alert('유효하지 않은 이메일 양식입니다.');
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
