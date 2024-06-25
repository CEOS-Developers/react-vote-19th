import styled from "styled-components"
import { useState } from "react";

interface ReadLeaderResponseProps {
  member :{
      name: string;
      part: string; //enum인데 어떻게 처리할지 고민
      team: string
      voteCount: number; 
  }
}

const MemberResultLists : React.FC<ReadLeaderResponseProps> = ({member}) => {
  const [selected, isSelected] = useState(false);

  const handleOnClick = () => {
      isSelected(!selected)
  }

  return (
    <MemberResultListsWrapper onClick={() => handleOnClick}>
      <InfoWrapper>
        <MemberName>{member.name}</MemberName>
        <Team>{member.team}</Team>
      </InfoWrapper>
        <VoteCount>{member.voteCount} votes!</VoteCount>
      </MemberResultListsWrapper>
  );
}

export default MemberResultLists

const InfoWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`

const MemberName = styled.div`
    color: white;
    font-size: 2rem;
    font-weight: 700;
`
const VoteCount = styled.div`
    width: 30%;
    color: ${({theme})=> theme.colors.green};
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin-right: 2rem;
`

const Team = styled.div`
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem 2rem;
    text-align : center;
    word-wrap: break-word;
`

const MemberResultListsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  width: 30vw;
  min-height: 8vh;

  //뒤에 불투명 배경 요소
  background-color: transparent;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.2)), linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  background-origin: border-box;
  background-clip: border-box, content-box;
  backdrop-filter: blur(30px);
`