import styled from "styled-components"
import { Dropdown } from "../components/Dropdown";
import MemberLists from "../components/MemberLists";


interface ReadLeaderResponse {
  userId: number; 
  name: string;
  part: string; //enum인데 어떻게 처리할지 고민
}


function MemberVotePage() {
  const frontendLists : ReadLeaderResponse [] = [
      {
        "userId": 1,
        "name": "ㅇㅇ",
        "part": "FRONT"
      },
      {
        "userId": 2,
        "name": "이지인",
        "part": "FRONT"
      },
      {
        "userId": 3,
        "name": "이지",
        "part": "FRONT"
      },
      {
        "userId": 4,
        "name": "이지인",
        "part": "FRONT"
      },
      {
        "userId": 5,
        "name": "이지인",
        "part": "FRONT"
      },
      {
        "userId": 6,
        "name": "이지인",
        "part": "FRONT"
      },
      {
        "userId": 7,
        "name": "이지인",
        "part": "FRONT"
      },
      {
        "userId": 8,
        "name": "이지인",
        "part": "FRONT"
      },
      {
        "userId": 9,
        "name": "이지인",
        "part": "FRONT"
      },
      {
        "userId": 10,
        "name": "이지인",
        "part": "FRONT"
      }
  ]

  const backendLists : ReadLeaderResponse [] = [
    {
      "userId": 1,
      "name": "ㅇㅇ",
      "part": "BACK"
    },
    {
      "userId": 2,
      "name": "이지인",
      "part": "BACK"
    },
    {
      "userId": 3,
      "name": "이지",
      "part": "BACK"
    },
    {
      "userId": 4,
      "name": "이지인",
      "part": "BACK"
    },
    {
      "userId": 5,
      "name": "이지인",
      "part": "BACK"
    },
    {
      "userId": 6,
      "name": "이지인",
      "part": "BACK"
    },
    {
      "userId": 7,
      "name": "이지인",
      "part": "BACK"
    },
    {
      "userId": 8,
      "name": "이지인",
      "part": "BACK"
    },
    {
      "userId": 9,
      "name": "이지인",
      "part": "BACK"
    },
    {
      "userId": 10,
      "name": "이지인",
      "part": "BACK"
    }
]

const partLists = ["Front", "Back"]

  return (
    <MemberVotePageContainer>
      <Title>Who do you want to vote for 
        <Dropdown
          listsName="Part"
          lists = {partLists}
        />
        Leader?
      </Title>
      <MemberListsWrapper>
        <ColumnWrapper>
          {frontendLists.slice(0, 5).map((member) => (
            <MemberLists key={member.userId} member={member} />
          ))}
        </ColumnWrapper>
        <ColumnWrapper>
          {frontendLists.slice(5).map((member) => (
            <MemberLists key={member.userId} member={member} />
          ))}
        </ColumnWrapper>
      </MemberListsWrapper>
      <VoteBtn>selected !</VoteBtn>
    </MemberVotePageContainer>
  )
}

export default MemberVotePage

const MemberVotePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Title = styled.h2`
  margin-bottom: 3rem;
`
const MemberListsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem
`

const ColumnWrapper = styled.div`
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