import { useState } from 'react';
import styled, { css } from 'styled-components';


interface TeamListsProps {
	team: {
		teamId: number;
		name: string;
		introduction: string;
	};
	onClick: () => void;
	isSelected: boolean;
}

interface StyledProps {
	isSelected: boolean;
}

const TeamLists: React.FC<TeamListsProps> = ({ team, onClick, isSelected }) => {

	return (
		<TeamListsWrapper onClick={onClick} isSelected={isSelected}>
			<div onClick={onClick}>
				<TeamName>{team.name}</TeamName>
				<Introduction>{team.introduction}</Introduction>
			</div>
		</TeamListsWrapper>
	);
};

export default TeamLists;

const TeamName = styled.div`
	color: white;
	font-size: 2rem;
	font-weight: 600;
	margin-top: 1rem;
	text-align: center;
`;
const Introduction = styled.div`
	color: white;
	font-size: 1.2rem;
	font-weight: 400;
	margin: 1rem 2rem;
	text-align: center;
	word-wrap: break-word;
`;

const TeamListsWrapper = styled.div<StyledProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
	width: 40vw;
	min-height: 10vh;

	//뒤에 불투명 배경 요소
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

	${({ isSelected, theme }) =>
		isSelected &&
		css`
			${TeamName}, ${Introduction} {
				color: ${theme.colors.green};
			}
		`}

	cursor: pointer;

	&:hover {
		${TeamName}, ${Introduction} {
			color: ${({ theme }) => theme.colors.green};
		}
	}
`;
