import { useQuery } from '@tanstack/react-query';
import { teamAPI } from '../api/request';
import { useNavigate } from 'react-router-dom';

export const useGetTeamResults = () => {
	const navigate = useNavigate();

	const { data, isLoading, error } = useQuery({
		queryKey: ['teamResults'],
		queryFn: async () => {
			const res = await teamAPI.getTeamVotes();
			if (res.status === 400) {
				navigate('/login');
				alert('접근오류! 로그인하세요');
			}
			return res.data; // res.data의 구조에 맞게 반환
		},
	});

	return {
		teamResults: data?.value || [],
		isLoading,
		error,
	};
};
