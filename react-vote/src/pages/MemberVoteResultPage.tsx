import { useState, useEffect } from "react";
import styled from "styled-components";
import MemberResultLists from "../components/MemberResultLists";
import { useGetLeaderResults } from "../queries/useGetLeaderResults";

interface ReadLeaderResponseProps {
  userId: number;
  name: string;
  part: string;
  team: string;
  voteCount: number;
}

function MemberVoteResultPage() {
  const [isFront, setIsFront] = useState("FRONT");
  const [showingLists, setShowingLists] = useState<ReadLeaderResponseProps[]>([]);

  const {
    leaderResults: frontendLists,
    isLoading: isLoadingFrontend,
    error: errorFrontend,
    refetch: refetchFrontend

  } = useGetLeaderResults('front');

  const {
    leaderResults: backendLists,
    isLoading: isLoadingBackend,
    error: errorBackend,
    refetch: refetchBackend
,
  } = useGetLeaderResults('back');

  useEffect(() => {
    if (isFront === "FRONT") {
      setShowingLists(frontendLists || []);
    } else {
      setShowingLists(backendLists || []);
    }
  }, [isFront, frontendLists, backendLists]);

  const togglePart = () => {
    setIsFront((prev) => (prev === "FRONT" ? "BACK" : "FRONT"));
  };

  if (isLoadingFrontend || isLoadingBackend) return <div>Loading...</div>;
  if (errorFrontend || errorBackend) return <div>Error fetching leader results</div>;

  showingLists.sort((a, b) => b.voteCount - a.voteCount);

  return (
    <MemberVotePageContainer>
      <Title>
        Let's check the results of the <br />
        <span onClick={togglePart}>{isFront}</span> Leader vote! 🎉
      </Title>
      <MemberListsWrapper>
        <ColumnWrapper>
          {showingLists.slice(0, 5).map((member) => (
            <MemberResultLists key={member.userId} member={member} />
          ))}
        </ColumnWrapper>
        <ColumnWrapper>
          {showingLists.slice(5).map((member) => (
            <MemberResultLists key={member.userId} member={member} />
          ))}
        </ColumnWrapper>
      </MemberListsWrapper>
    </MemberVotePageContainer>
  );
}

export default MemberVoteResultPage;

const MemberVotePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h2`
  margin-bottom: 3rem;

  span {
    border: solid 0.15rem ${({ theme }) => theme.colors.green};
    border-radius: 10px;
    padding: 0.2rem 0.5rem;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
`;

const MemberListsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
