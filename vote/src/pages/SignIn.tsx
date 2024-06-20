import styled from "styled-components";
import InputContainer from "@components/common/InputContainer";
import { useState } from "react";
import { BtnSign } from "@styles/BtnStyle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;
  padding: 14.5rem 20.25rem;
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

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const SignInBtn = styled(BtnSign)`
  width: 12.625rem;
  height: 3.625rem;
`;

export default function SignIn() {
  const [ID, setId] = useState("");
  const [PW, setPw] = useState("");

  return (
    <Wrapper>
      <Header>로그인</Header>
      <Section>
        <FilledInput>
          <InputContainer name="ID" state={ID} setState={setId} />
          <InputContainer name="PASSWORD" state={PW} setState={setPw} />
        </FilledInput>
        <Container>
          <SignInBtn>로그인</SignInBtn>
        </Container>
      </Section>
    </Wrapper>
  );
}
