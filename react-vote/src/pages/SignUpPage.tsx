import styled from "styled-components"
import InputBox from "../components/InputBox"
import { Dropdown } from "../components/Dropdown"



function SignUpPage() {
  const teamLists = ["Azito", "BeatBuddy", "Buldog", "Couplelog", "TIG"];
  const roleLists = ["LEADER", "GENERAL"];
  const partLists = ["FRONT", "BACK"];

  return (
    <>
      <h2>Sign Up</h2>
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
       

        <DropdownWrapper>
          <Dropdown
            lists = {teamLists}
          />
          <Dropdown
            lists = {roleLists}
          />
          <Dropdown
            lists = {partLists}
          />
        </DropdownWrapper>
      </SignUpInfoWrapper>
    </>
  )
}

export default SignUpPage

const SignUpInfoWrapper = styled.div`
  
`
const InputBoxWrapper = styled.div`
  
`
const DropdownWrapper = styled.div`
  
`