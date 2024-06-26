import { useState } from 'react';
import styled from 'styled-components';

interface TeamResultListsProps {
	team: {
		name: string;
		introduction: string;
		voteCount: number;
	};
}

const TeamResultLists: React.FC<TeamResultListsProps> = ({ team }) => {
	const [selected, setSelected] = useState(false);

	const handleOnClick = () => {
		setSelected(!selected);
	};

	return (
		<TeamResultListsWrapper onClick={handleOnClick}>
			<InfoWrapper>
				<TeamName>{team.name}</TeamName>
				<Introduction>{team.introduction}</Introduction>
			</InfoWrapper>
			<VoteCount>{team.voteCount} votes!</VoteCount>
		</TeamResultListsWrapper>
	);
};

export default TeamResultLists;

const InfoWrapper = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const TeamName = styled.div`
	color: white;
	font-size: 2rem;
	font-weight: 600;
	margin-top: 1rem;
`;

const Introduction = styled.div`
	color: white;
	font-size: 1.2rem;
	font-weight: 400;
	margin: 1rem 2rem;
	text-align: center;
	word-wrap: break-word;
`;

const VoteCount = styled.div`
	width: 30%;
	color: ${({ theme }) => theme.colors.green};
	font-size: 2rem;
	font-weight: 600;
	display: flex;
	justify-content: center;
`;

const TeamResultListsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
	width: 40vw;
	min-height: 10vh;

	background-color: transparent;
	border: 0.1rem solid rgba(255, 255, 255, 0.3);
	border-radius: 20px;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0.05),
			rgba(255, 255, 255, 0.2)
		),
		linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
	background-origin: border-box;
	background-clip: border-box, content-box;
	backdrop-filter: blur(30px);
`;
