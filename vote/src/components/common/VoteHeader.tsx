import { LogoIc } from "@assets/index";
import styled from "styled-components";
import SignBtn from "@components/common/SignBtn";

const LogoIcon = styled(LogoIc)`
  width: 10.75rem;
  height: 4.5625rem;
`;

const HeaderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BtnContainer = styled.section`
  display: flex;

  gap: 2rem;
`;

/** header */
export default function VoteHeader() {
  return (
    <HeaderContainer as="header">
      <LogoIcon />
      <BtnContainer>
        <SignBtn text="로그인" />
        <SignBtn text="회원가입" />
        <SignBtn text="로그아웃" />
      </BtnContainer>
    </HeaderContainer>
  );
}
