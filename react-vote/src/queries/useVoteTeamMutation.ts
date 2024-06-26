import { useMutation } from '@tanstack/react-query';
import { userAPI } from '../api/request';

export const useVoteTeamMutation = () => {
	const { mutate } = useMutation({
		mutationFn: async (teamId: number) => {
			return await userAPI.voteTeam(teamId);
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
