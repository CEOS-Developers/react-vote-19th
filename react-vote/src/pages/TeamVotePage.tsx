import styled from "styled-components"
import TeamLists from "../components/TeamLists"

interface ReadTeamResponse {
  teamId: number; // 정수형으로 사용
  name: string;
  introduction: string;
}


function TeamVotePage() {
  //api로 받아올 부분
  const teamLists : ReadTeamResponse[] = [
    {
      teamId: 1,
      name: "Azito",
      introduction: "Introduction for Team Azito"
    },
    {
      teamId: 2,
      name: "BeatBuddy",
      introduction: "Introduction for Team BeatBuddy"
    },
    {
      teamId: 3,
      name: "PetPlate",
      introduction: "Introduction for Team PetPlate"
    },
    {
      teamId: 4,
      name: "Couplelog",
      introduction: "Introduction for Team Couplelog"
    },
    {
      teamId: 5,
      name: "TIG",
      introduction: "Introduction for Team TIG"
    }
  ];

  return (
    <TeamVotePageContainer>
      <Title>Which team do you want to vote for?</Title>
      <TeamListsWrapper>
        {teamLists.map((team) => (
            <TeamLists
             key={team.teamId} team={team}
            />
          ))}
      </TeamListsWrapper>
      <VoteBtn>selected !</VoteBtn>
    </TeamVotePageContainer>
  )
}

export default TeamVotePage

const TeamVotePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Title = styled.h2`
  margin-bottom: 3rem;
`
const TeamListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.12)), linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  background-clip: border-box, content-box;
  backdrop-filter: blur(30px);
  
  color: white;
  font-size: 1.8rem;
  font-weight: 550;
`