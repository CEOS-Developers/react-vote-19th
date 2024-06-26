import styled from 'styled-components';
import TeamLists from '../components/TeamLists';
import { useQuery } from '@tanstack/react-query';
import { teamAPI } from '../api/request';
import { useVoteTeamMutation } from '../queries/useVoteMutation';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

interface ReadTeamResponse {
	teamId: number; // 정수형으로 사용
	name: string;
	introduction: string;
}

function TeamVotePage() {
	const navigate = useNavigate();

	const { data, isLoading, error } = useQuery<ReadTeamResponse[], Error>({
		queryKey: ['getTeams'],
		queryFn: async () => {
			const response = await teamAPI.getTeams();
			console.log(response.data.value);
			return response.data.value;
		},
	});

	const { teamVote } = useVoteTeamMutation();
	const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

	const handleVote = () => {
		if (selectedTeamId !== null) {
			teamVote(selectedTeamId);
			console.log(selectedTeamId);
		} else {
			alert('투표할 팀을 선택해주세요.');
		}
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error fetching teams: {error.message}</div>;

	return (
		<TeamVotePageContainer>
			<Title>Which team do you want to vote for?</Title>

			<TeamListsWrapper>
				{data
					? data.map((team) => (
							<TeamLists
								key={team.teamId}
								team={team}
								onClick={() => setSelectedTeamId(team.teamId)}
								isSelected={selectedTeamId === team.teamId}
							/>
						))
					: null}
			</TeamListsWrapper>
			<BtnWrapper>
				<VoteBtn onClick={handleVote}>selected !</VoteBtn>
				<ResultBtn onClick = {() => navigate("/member-result")}>show result</ResultBtn>
			</BtnWrapper>
		</TeamVotePageContainer>
	);
}
export default TeamVotePage;

const TeamVotePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const Title = styled.h2`
	margin-bottom: 3rem;
`;
const TeamListsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BtnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
`

const VoteBtn = styled.div`
	width: 15vw;
	height: 5.5vh;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1rem;

	//뒤에 불투명 배경 요소
	background-color: transparent;
	border: 0.1rem solid rgba(255, 255, 255, 0.3);
	border-radius: 10px;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0.05),
			rgba(255, 255, 255, 0.12)
		),
		linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
	background-clip: border-box, content-box;
	backdrop-filter: blur(30px);

	color: white;
	font-size: 1.8rem;
	font-weight: 550;

	&:hover {
		background-color : ${({theme}) => theme.colors.green};
		border: none;
	}
`;


const ResultBtn = styled.div`
	width: 15vw;
	height: 5.5vh;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1rem;

	//뒤에 불투명 배경 요소
	background-color: transparent;
	border: 0.1rem solid rgba(255, 255, 255, 0.3);
	border-radius: 10px;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0.05),
			rgba(255, 255, 255, 0.12)
		),
		linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
	background-clip: border-box, content-box;
	backdrop-filter: blur(30px);

	color: white;
	font-size: 1.8rem;
	font-weight: 550;

	&:hover {
		background-color : ${({theme}) => theme.colors.green};
		border: none;
	}
`