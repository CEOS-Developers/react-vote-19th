import styled from "styled-components";
import { useState } from "react";
import { BtnSign } from "@styles/BtnStyle";
import InputContainer from "@components/common/InputContainer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0 20.25rem;
`;

const Header = styled.h1`
  ${({ theme }) => theme.fonts.Headline2};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;

  padding: 6rem 4rem 2rem;

  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.light_blue};
`;

const FilledInput = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`;

const VerifyBtn = styled(BtnSign)`
  width: 100%;
  height: 3.625rem;
`;

const Toggle = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  margin-top: 7.4rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.TeamName_Small};
`;

const ToggleContainer = styled.section`
  display: flex;
  justify-content: space-around;
`;

const Dropdown = styled.select`
  width: 16.625rem;
  height: 5rem;

  padding: 0.5rem;
  ${({ theme }) => theme.fonts.SignBtnText};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main_blue};
`;

const BtnContainer = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 5rem;
`;

const SignUpBtn = styled(BtnSign)`
  width: 12.625rem;
  height: 3.625rem;
`;

const options = {
  teams: ["Team A", "Team B", "Team C"],
  parts: ["Part 1", "Part 2", "Part 3"],
};

export default function SignUp() {
  const [name, setName] = useState("");
  const [ID, setId] = useState("");
  const [PW, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedPart, setSelectedPart] = useState("");

  return (
    <Wrapper>
      <Header>회원가입</Header>
      <Section>
        <FilledInput>
          <InputContainer name="Name" state={name} setState={setName} />
          <InputContainer name="ID" state={ID} setState={setId} />
          <InputContainer name="PASSWORD" state={PW} setState={setPw} />
          <InputContainer
            name="CONFIRM PASSWORD"
            state={pwCheck}
            setState={setPwCheck}
          />
          <InputContainer custom={true}>
            <label htmlFor="email">EMAIL</label>
            <div>
              <input
                type="email"
                id="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <VerifyBtn type="button">인증</VerifyBtn>
            </div>
          </InputContainer>
        </FilledInput>
        <Toggle>
          <Title>팀 명 / 파트</Title>
          <ToggleContainer>
            <Dropdown
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}>
              <option value="" disabled>
                팀 선택
              </option>
              {options.teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </Dropdown>
            <Dropdown
              value={selectedPart}
              onChange={(e) => setSelectedPart(e.target.value)}>
              <option value="" disabled>
                파트 선택
              </option>
              {options.parts.map((part) => (
                <option key={part} value={part}>
                  {part}
                </option>
              ))}
            </Dropdown>
          </ToggleContainer>
        </Toggle>
        <BtnContainer>
          <SignUpBtn>가입하기</SignUpBtn>
        </BtnContainer>
      </Section>
    </Wrapper>
  );
}
