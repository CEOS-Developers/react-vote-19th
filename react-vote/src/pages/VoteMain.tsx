import styled from "styled-components"
import { useNavigate } from "react-router-dom";

function VoteMain() {
  const navigate = useNavigate();

  return (
    <VoteMainContainer>
      <Title>Part leader & Demo day voting</Title>
      <VoteBtnWrapper>
        <PartBtn onClick={() => navigate("/membervote")}>
          Let's go vote for the 
          <span>part leader!</span>
        </PartBtn>
        <DemoDayBtn onClick={() => navigate("/teamvote")}>
          Let's go vote for the 
          <br/>
          <span>Demo day!</span>
        </DemoDayBtn>
      </VoteBtnWrapper>
    </VoteMainContainer>
  )
}

export default VoteMain

const VoteMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const Title = styled.h2`
  margin-bottom: 3rem;
`

const VoteBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`

const PartBtn = styled.div`
  width: 20vw;
  height: 40vh;
  //font
  font-size: 2rem;
  font-weight: 550;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //뒤에 불투명 배경 요소
  background-color: transparent;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.2)), linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  background-origin: border-box;
  background-clip: border-box, content-box;
  backdrop-filter: blur(30px);
`

const DemoDayBtn = styled.div`
  width: 20vw;
  height: 40vh;
  //font
  font-size: 2rem;
  font-weight: 550;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //뒤에 불투명 배경 요소
  background-color: transparent;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.2)), linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  background-origin: border-box;
  background-clip: border-box, content-box;
  backdrop-filter: blur(30px);
  `