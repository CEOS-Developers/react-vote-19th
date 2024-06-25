import { useState } from "react";
import styled from "styled-components";
import { DropdownPart } from "../components/DropdownPart";
import MemberResultLists from "../components/MemberResultLists";

interface ReadLeaderResponseProps {
  name: string;
  part: string;
  team: string;
  voteCount: number; 
}

function MemberVoteResultPage() {
  const frontendLists: ReadLeaderResponseProps[] = [
    {
      "name": "ㅇㅇ",
      "part": "FRONT",
      "team": "Azito",
      "voteCount": 1,
    },
    {
      "name": "이지인",
      "part": "FRONT",
      "team": "Azito",
      "voteCount": 2,
    },
    {
      "name": "이지",
      "part": "FRONT",
      "team": "Beatbuddy",
      "voteCount": 3,
    },
    {
      "name": "이지인",
      "part": "FRONT",
      "team": "Beatbuddy",
      "voteCount": 4,
    },
    {
      "name": "이지인",
      "part": "FRONT",
      "team": "PetPlate",
      "voteCount": 5,
    },
    {
      "name": "이지인",
      "part": "FRONT",
      "team": "PetPlate",
      "voteCount": 6,
    },
    {
      "name": "이지인",
      "part": "FRONT",
      "team": "Couplelog",
      "voteCount": 7,
    },
    {
      "name": "이지인",
      "part": "FRONT",
      "team": "Couplelog",
      "voteCount": 8,
    },
    {
      "name": "이지인",
      "part": "FRONT",
      "team": "TIG",
      "voteCount": 9,
    },
    {
      "name": "이지인",
      "part": "FRONT",
      "team": "TIG",
      "voteCount": 10,
    },
  ];

  const backendLists: ReadLeaderResponseProps[] = [
    {
      "name": "김다희",
      "part": "BACK",
      "team": "Azito",
      "voteCount": 1,
    },
    {
      "name": "김다희",
      "part": "BACK",
      "team": "Azito",
      "voteCount": 1,
    },
    {
      "name": "김다희",
      "part": "BACK",
      "team": "Beatbuddy",
      "voteCount": 3,
    },
    {
      "name": "김다희",
      "part": "BACK",
      "team": "Beatbuddy",
      "voteCount": 9,
    },
    {
      "name": "김다희",
      "part": "BACK",
      "team": "PetPlate",
      "voteCount": 9,
    },
    {
      "name": "김다희",
      "part": "BACK",
      "team": "PetPlate",
      "voteCount": 7,
    },
    {
      "name": "김다희",
      "part": "BACK",
      "team": "Couplelog",
      "voteCount": 6,
    },
    {
      "name": "김다희",
      "part": "BACK",
      "team": "Couplelog",
      "voteCount": 5,
    },
    {
      "name": "김다희",
      "part": "BACK",
      "team": "TIG",
      "voteCount": 4,
    },
    {
      "name": "김다희",
      "part": "BACK",
      "team": "TIG",
      "voteCount": 1,
    },
  ];

  const partLists = ["FRONT", "BACK"];

  const [showingLists, setShowingLists] = useState(frontendLists);
  const handlePartChange = (selectedPart: string) => {
    if (selectedPart === "FRONT") {
      setShowingLists(frontendLists);
    } else if (selectedPart === "BACK") {
      setShowingLists(backendLists);
    }
  };




  return (
    <MemberVotePageContainer>
      <Title>
        Who do you want to vote for
        <DropdownPart listsName="Part" lists={partLists} onChange={handlePartChange} />
        Leader?
      </Title>
      <MemberListsWrapper>
        <ColumnWrapper>
          {showingLists.slice(0, 5).map((member) => (
            <MemberResultLists key={member.name} member={member} />
          ))}
        </ColumnWrapper>
        <ColumnWrapper>
          {showingLists.slice(5, 10).map((member) => (
            <MemberResultLists key={member.name} member={member} />
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
