import { useQuery } from '@tanstack/react-query';
import { userAPI } from '../api/request';
import { useNavigate } from 'react-router-dom';

export const useGetLeaders = (partName: string) => {
	const navigate = useNavigate();

	const { data, isLoading, error } = useQuery({
		queryKey: ['leaders', partName],
		queryFn: async () => {
			const res = await userAPI.getLeaders(partName);
			if (res.status === 400) {
				navigate('/login');
				alert('접근오류! 로그인하세요');
			}
			return res.data; // res.data의 구조에 맞게 반환
		},
	});

	return {
		leaders: data?.value || [],
		isLoading,
		error,
	};
};
