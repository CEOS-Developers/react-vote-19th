import styled from 'styled-components';
import TeamResultLists from '../components/TeamResultLists';
import { useGetTeamResults } from '../queries/useGetTeamResults';

interface TeamVoteResult {
  name: string;
  introduction: string;
  voteCount: number;
}

function TeamVoteResultPage() {
  const { teamResults, isLoading, error } = useGetTeamResults();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching team results</div>;

  teamResults.sort((a: TeamVoteResult, b: TeamVoteResult) => b.voteCount - a.voteCount);

  return (
    <TeamVotePageContainer>
      <Title>Let's check the results of the team vote! 🎉</Title>
      <TeamResultListsWrapper>
        {teamResults.map((team: TeamVoteResult) => (
          <TeamResultLists key={team.name} team={team} />
        ))}
      </TeamResultListsWrapper>
    </TeamVotePageContainer>
  );
}

export default TeamVoteResultPage;

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

const TeamResultListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
