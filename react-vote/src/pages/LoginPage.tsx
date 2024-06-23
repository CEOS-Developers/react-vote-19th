import styled from "styled-components"
import InputBox from "../components/InputBox"

function LoginPage() {
  return (
  <LoginContainer>
        <Title>Login</Title>
        <LoginInfoWrapper>
          <InputBoxWrapper>
            <InputBox
              placeholder = "아이디"
            />
            <InputBox
              placeholder = "비밀번호"
            />
          </InputBoxWrapper>
          <LoginBtn>가입하기</LoginBtn>
        </LoginInfoWrapper>
      </LoginContainer>  
    )
}

export default LoginPage

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const Title = styled.h2`
    margin-bottom: 1.5rem;
`
const LoginInfoWrapper = styled.div`
    width: 40vw;
    height: 40vh;

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
const LoginBtn = styled.div`
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