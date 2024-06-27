import styled from "styled-components";
import InputContainer from "@components/common/InputContainer";
import { useState } from "react";
import { BtnSign } from "@styles/BtnStyle";
import { useNavigate } from "react-router-dom";
import { usePostSignIn } from "@hooks/usePostSignIn";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 14.5rem 20.25rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.h1`
  ${({ theme }) => theme.fonts.Headline2};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6rem 4rem 2rem;
  gap: 7.4rem;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.light_blue};
`;

const FilledInput = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`;

const BtnContainer = styled.section`
  display: flex;
  justify-content: space-around;
`;

const SignInBtn = styled(BtnSign)`
  width: 12.625rem;
  height: 3.625rem;
`;

const ShowResultBtn = styled.button`
  width: 25rem;
  height: 5rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.TeamDetail};
  background-color: ${({ theme }) => theme.colors.active};
`;

export default function SignIn() {
  const [ID, setId] = useState("");
  const [PW, setPw] = useState("");

  const { mutate: postSignInMutate } = usePostSignIn();
  const navigate = useNavigate();

  function handleSignIn() {
    postSignInMutate(
      { username: ID, password: PW },
      {
        onSuccess: () => {
          localStorage.setItem("INFO", JSON.stringify(ID));
        },
      },
    );
  }

  function moveToSignUp() {
    navigate("/signup");
  }

  return (
    <Wrapper>
      <Container>
        <Header>로그인</Header>
        <ShowResultBtn onClick={() => navigate("/results-only")}>
          결과만 보기
        </ShowResultBtn>
      </Container>
      <Section>
        <FilledInput>
          <InputContainer name="ID" state={ID} setState={setId} />
          <InputContainer name="PASSWORD" state={PW} setState={setPw} />
        </FilledInput>
        <BtnContainer>
          <SignInBtn onClick={handleSignIn}>로그인</SignInBtn>
          <SignInBtn onClick={moveToSignUp}>회원가입</SignInBtn>
        </BtnContainer>
      </Section>
    </Wrapper>
  );
}
