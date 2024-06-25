import styled from "styled-components"
import InputBox from "../components/InputBox"

import { useLoginMutation } from '../queries/useLoginMutation';
import React, { useState } from 'react';



function LoginPage() {

  const { login, isPending } = useLoginMutation();

  const [userID, setUserID] = useState('');
	const [password, setPassword] = useState('');

  const handleLogin = async () => {
		const data = { userID, password };
		console.log(data);
		login(data); // mutate 함수 실행 -> 서버에 로그인 요청 -> 이에 따른 accesstoken을 받고 처리하는 것은 커스텀 훅 내에서 처리
	};



  return (
  <LoginContainer>
        <Title>Login</Title>
        <LoginInfoWrapper>
          <InputBoxWrapper>
           <InputBox
						placeholder='아이디'
						value={userID}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setUserID(e.target.value)
						}
					/>
					<InputBox
						placeholder='비밀번호'
						type='password'
						value={password}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setPassword(e.target.value)
						}
					/>
          </InputBoxWrapper>
          <LoginBtn onClick={handleLogin}>로그인 하기</LoginBtn>
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