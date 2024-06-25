import styled from "styled-components"
import { useState } from "react";

interface ReadLeaderResponseProps {
    member :{
        userId: number; 
        name: string;
        part: string; //enum인데 어떻게 처리할지 고민
        team: string
    }
  }

const MemberLists : React.FC<ReadLeaderResponseProps> = ({member}) => {
    const [selected, isSelected] = useState(false);

    const handleOnClick = () => {
        isSelected(!selected)
    }

    return (
      <MemberListsWrapper onClick={() => handleOnClick}>
        <MemberName>{member.name}</MemberName>
        <Team>{member.team}</Team>
      </MemberListsWrapper>
    );
}

export default MemberLists

const MemberName = styled.div`
    color: white;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1rem;
`

const Team = styled.div`
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem 2rem;
    text-align : center;
    word-wrap: break-word;
`

const MemberListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  width: 20vw;
  min-height: 8vh;

  //뒤에 불투명 배경 요소
  background-color: transparent;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.2)), linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  background-origin: border-box;
  background-clip: border-box, content-box;
  backdrop-filter: blur(30px);

  &:hover {
    ${MemberName}, ${Team}{
      color: ${({theme})=>theme.colors.green}
    }
  }

  cursor: pointer;
`