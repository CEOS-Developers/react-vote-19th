import styled from "styled-components"
import TeamResultLists from "../components/TeamResultLists"

interface TeamVoteResult {
  name: string,
  introduction: string,
  voteCount: number
}

function TeamVoteResultPage() {
   //api로 받아올 부분
   const teamResultLists : TeamVoteResult[] = [
    {
      name: "Azito",
      introduction: "Introduction for Team Azito",
      voteCount : 1
    },
    {
      name: "BeatBuddy",
      introduction: "Introduction for Team BeatBuddy",
      voteCount : 3
    },
    {
      name: "PetPlate",
      introduction: "Introduction for Team PetPlate",
      voteCount : 2
    },
    {
      name: "Couplelog",
      introduction: "Introduction for Team Couplelog",
      voteCount : 7
    },
    {
      name: "TIG",
      introduction: "Introduction for Team TIG",
      voteCount : 4
    }
  ];

  teamResultLists.sort((a, b) => b.voteCount - a.voteCount);

  return (
    <TeamVotePageContainer>
      <Title>Let's check the results of the team vote! 🎉</Title>
      <TeamResultListsWrapper>
        {teamResultLists.map((team) => (
          <TeamResultLists key={team.name} team={team} />
        ))}
      </TeamResultListsWrapper>
    </TeamVotePageContainer>
  )
}

export default TeamVoteResultPage

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
const TeamResultListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`