import { useMutation } from '@tanstack/react-query';
import { userAPI } from '../api/request';

export const useVoteTeamMutation = () => {
	const { mutate } = useMutation({
		mutationFn: async (teamId: number) => {
			const token = localStorage.getItem('accessToken') || '';
			if (!token) {
				alert('로그인이 필요합니다.');
			}
			return await userAPI.voteTeam(teamId, token);
		},
		onSuccess: () => {
			alert('투표가 성공적으로 완료되었습니다!');
		},
		onError: (error: any) => {
			alert(`중복 투표는 불가능합니다.`);
		},
	});

	return {
		vote: mutate,
	};
};
