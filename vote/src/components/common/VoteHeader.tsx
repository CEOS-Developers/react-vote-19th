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

  gap: 1rem;
`;

const UserName = styled.p`
  align-items: center;
  padding: 1rem 2rem;

  border-radius: 2rem;

  ${({ theme }) => theme.fonts.TeamName_Small};
  background-color: ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.black};
`;

/** header */
export default function VoteHeader() {
  const savedData = localStorage.getItem("INFO");
  const info = savedData ? JSON.parse(savedData) : [];

  return (
    <HeaderContainer as="header">
      <LogoIcon />
      <BtnContainer>
        <UserName>{info} 님</UserName>
        <SignBtn text="로그아웃" />
      </BtnContainer>
    </HeaderContainer>
  );
}
