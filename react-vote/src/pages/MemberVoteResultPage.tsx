import { useState } from "react";
import styled from "styled-components";
import MemberResultLists from "../components/MemberResultLists";

interface ReadLeaderResponseProps {
  userId: number,
  name: string;
  part: string;
  team: string;
  voteCount: number; 
}

function MemberVoteResultPage() {
  const frontendLists: ReadLeaderResponseProps[] = [
    {
      "userId": 0,
      "name": "ㅇㅇ",
      "part": "FRONT",
      "team": "Azito",
      "voteCount": 1,
    },
    {
      "userId": 1,
      "name": "이지인",
      "part": "FRONT",
      "team": "Azito",
      "voteCount": 2,
    },
    {
      "userId": 2,
      "name": "이지",
      "part": "FRONT",
      "team": "Beatbuddy",
      "voteCount": 3,
    },
    {
      "userId": 3,
      "name": "이지인",
      "part": "FRONT",
      "team": "Beatbuddy",
      "voteCount": 4,
    },
    {
      "userId": 4,
      "name": "이지인",
      "part": "FRONT",
      "team": "PetPlate",
      "voteCount": 5,
    },
    {
      "userId": 5,
      "name": "이지인",
      "part": "FRONT",
      "team": "PetPlate",
      "voteCount": 6,
    },
    {
      "userId": 6,
      "name": "이지인",
      "part": "FRONT",
      "team": "Couplelog",
      "voteCount": 7,
    },
    {
      "userId": 7,
      "name": "이지인",
      "part": "FRONT",
      "team": "Couplelog",
      "voteCount": 8,
    },
    {
      "userId": 8,
      "name": "이지인",
      "part": "FRONT",
      "team": "TIG",
      "voteCount": 9,
    },
    {
      "userId": 9,
      "name": "이지인",
      "part": "FRONT",
      "team": "TIG",
      "voteCount": 10,
    },
  ];

  const backendLists: ReadLeaderResponseProps[] = [
    {
      "userId": 0,
      "name": "김다일",
      "part": "BACK",
      "team": "Azito",
      "voteCount": 1,
    },
    {
      "userId": 1,
      "name": "김다이",
      "part": "BACK",
      "team": "Azito",
      "voteCount": 1,
    },
    {
      "userId": 2,
      "name": "김다삼",
      "part": "BACK",
      "team": "Beatbuddy",
      "voteCount": 3,
    },
    {
      "userId": 3,
      "name": "김다사",
      "part": "BACK",
      "team": "Beatbuddy",
      "voteCount": 9,
    },
    {
      "userId": 4,
      "name": "김다오",
      "part": "BACK",
      "team": "PetPlate",
      "voteCount": 9,
    },
    {
      "userId": 5,
      "name": "김다육",
      "part": "BACK",
      "team": "PetPlate",
      "voteCount": 7,
    },
    {
      "userId": 6,
      "name": "김다칠",
      "part": "BACK",
      "team": "Couplelog",
      "voteCount": 6,
    },
    {
      "userId": 7,
      "name": "김다팔",
      "part": "BACK",
      "team": "Couplelog",
      "voteCount": 5,
    },
    {
      "userId": 8,
      "name": "김다구",
      "part": "BACK",
      "team": "TIG",
      "voteCount": 4,
    },
    {
      "userId": 9,
      "name": "김다십",
      "part": "BACK",
      "team": "TIG",
      "voteCount": 1,
    },
  ];


  //toggle
  const [isFront, setIsFront] = useState("FRONT");
  const [showingLists, setShowingLists] = useState(frontendLists);
  const togglePart = () => {
    if(isFront === "FRONT") {
      setIsFront("BACK");
      setShowingLists(backendLists);
    } else{
      setIsFront("FRONT");
      setShowingLists(frontendLists);
    }
  }

  showingLists.sort((a, b) => b.voteCount - a.voteCount);



  return (
    <MemberVotePageContainer>
      <Title>
        Let's check the results of the <br/>
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
    border: solid 0.15rem  ${({theme}) => theme.colors.green};
    border-radius: 10px;
    //background-color: ${({theme}) => theme.colors.green};
    padding: 0.2rem 0.5rem;

    &:hover{
      cursor: pointer;
      background-color: ${({theme}) => theme.colors.green};
    }
  }
`

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
