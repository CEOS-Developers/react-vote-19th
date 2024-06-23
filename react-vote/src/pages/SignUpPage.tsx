import styled from "styled-components"
import InputBox from "../components/InputBox"
import { Dropdown } from "../components/Dropdown"



function SignUpPage() {
  const teamLists = ["Azito", "BeatBuddy", "Buldog", "Couplelog", "TIG"];
  const roleLists = ["LEADER", "GENERAL"];
  const partLists = ["FRONT", "BACK"];

  return (
    <SignUpContainer>
      <Title>Sign Up</Title>
      <SignUpInfoWrapper>
        <InputBoxWrapper>
          <InputBox
            placeholder = "이름"
          />
          <InputBox
            placeholder = "아이디"
          />
          <InputBox
            placeholder = "비밀번호"
          />
          <InputBox
            placeholder = "비밀번호 확인"
          />
          <InputBox
            placeholder = "이메일 주소"
          />
        </InputBoxWrapper>
        <ValidateBtn>이메일 인증</ValidateBtn>

        <DropdownWrapper>
          <Dropdown
            listsName="team"
            lists = {teamLists}
          />
          <Dropdown
            listsName="part"
            lists = {partLists}
          />
          <Dropdown
            listsName="role"
            lists = {roleLists}
          />
        </DropdownWrapper>
        <EnrollBtn>가입하기</EnrollBtn>
      </SignUpInfoWrapper>
    </SignUpContainer>
  )
}

export default SignUpPage

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  margin-bottom: 1.5rem;
`

const SignUpInfoWrapper = styled.div`
  width: 40vw;
  height: 70vh;

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
const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
const ValidateBtn = styled.div`
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  border-radius : 5px;
  background-color : white;
  width: 80%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center; 
  margin-bottom: 1rem;
`

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`
const EnrollBtn = styled.div`
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  border-radius : 5px;
  background-color : white;
  width: 80%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center; 
  margin-bottom: 1rem;
`