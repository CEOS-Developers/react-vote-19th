import styled from "styled-components";
import { useState } from "react";
import { BtnSign } from "@styles/BtnStyle";
import InputContainer from "@components/common/InputContainer";
import { usePostSignUp } from "@hooks/usePostSignUp";
import { usePostEmail } from "@hooks/usePostEmail";

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

const ConfirmText = styled.p<{ $passwordMatch: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.625rem;
  background-color: ${({ $passwordMatch, theme }) =>
    $passwordMatch ? theme.colors.active : theme.colors.confirm};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.SignBtnText};
`;

const EmailVerifyText = styled.p<{ $emailVerify: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.625rem;
  background-color: ${({ $emailVerify, theme }) =>
    $emailVerify ? theme.colors.active : theme.colors.confirm};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.SignBtnText};
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

const Dropdown = styled.select<{ $selected: boolean }>`
  width: 16.625rem;
  height: 5rem;
  padding: 0.5rem;
  ${({ theme }) => theme.fonts.SignBtnText};
  color: ${({ $selected, theme }) =>
    $selected ? theme.colors.black : theme.colors.white};
  background-color: ${({ $selected, theme }) =>
    $selected ? theme.colors.active : theme.colors.main_blue};
`;

const BtnContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const SignUpBtn = styled(BtnSign)<{ $disabled: boolean }>`
  width: 12.625rem;
  height: 3.625rem;

  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  background-color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.confirm : theme.colors.main_blue};
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.black : theme.colors.white};
`;

const options = {
  teams: ["AZITO", "TIG", "커플로그", "펫플레이트", "비트버디"],
  parts: ["BACKEND", "FRONTEND"],
};

export default function SignUp() {
  const [name, setName] = useState("");
  const [ID, setId] = useState("");
  const [PW, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedPart, setSelectedPart] = useState("");
  const [isEmailClicked, setIsEmailClicked] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const { mutate: postSignUpMutate } = usePostSignUp();
  const { mutate: postEmailMutate } = usePostEmail();

  const passwordMatch = PW !== "" && PW === pwCheck;
  const emailVerify = emailCheck !== "" && emailCheck === verificationCode;

  const isSignUpDisabled =
    !passwordMatch ||
    ID === "" ||
    PW === "" ||
    name === "" ||
    email === "" ||
    !emailVerify ||
    selectedPart === "" ||
    selectedTeam === "";

  function handleEmail() {
    postEmailMutate(
      { email: email },
      {
        onSuccess: (data) => {
          setIsEmailClicked(true);
          setVerificationCode(data.data);
        },
      },
    );
  }

  function handleSignUp() {
    postSignUpMutate({
      username: ID,
      password: PW,
      email: email,
      part: selectedPart,
      team: selectedTeam,
      role: true,
      name: name,
    });
  }

  return (
    <Wrapper>
      <Header>회원가입</Header>
      <Section>
        <FilledInput>
          <InputContainer name="NAME" state={name} setState={setName} />
          <InputContainer name="ID" state={ID} setState={setId} />
          <InputContainer name="PASSWORD" state={PW} setState={setPw} />
          <InputContainer custom={true}>
            <label>CONFIRM PASSWORD</label>
            <div>
              <input
                type="text"
                id="pwCheck"
                placeholder="CONFIRM PASSWORD"
                value={pwCheck}
                onChange={(e) => setPwCheck(e.target.value)}
              />
              <ConfirmText $passwordMatch={passwordMatch}>PW 확인</ConfirmText>
            </div>
          </InputContainer>
          <InputContainer custom={true}>
            <label htmlFor={email}>EMAIL</label>
            <div>
              <input
                type="text"
                id={email}
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <VerifyBtn type="button" onClick={handleEmail}>
                이메일 인증
              </VerifyBtn>
            </div>
          </InputContainer>
          {isEmailClicked && (
            <InputContainer custom={true}>
              <label>VERIFY EMAIL</label>
              <div>
                <input
                  type="text"
                  id="emailCheck"
                  placeholder="이메일 인증코드"
                  value={emailCheck}
                  onChange={(e) => setEmailCheck(e.target.value)}
                />
                <EmailVerifyText $emailVerify={emailVerify}>
                  인증코드 확인
                </EmailVerifyText>
              </div>
            </InputContainer>
          )}
        </FilledInput>
        <Toggle>
          <Title>팀 명 / 파트</Title>
          <ToggleContainer>
            <Dropdown
              value={selectedTeam}
              $selected={!!selectedTeam}
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
              $selected={!!selectedPart}
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
          <SignUpBtn
            type="button"
            disabled={isSignUpDisabled}
            $disabled={isSignUpDisabled}
            onClick={handleSignUp}>
            가입하기
          </SignUpBtn>
        </BtnContainer>
      </Section>
    </Wrapper>
  );
}
