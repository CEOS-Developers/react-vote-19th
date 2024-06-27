import { LogoIc } from "@assets/index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LogoWrapper = styled.div`
  width: 10.75rem;
  height: 4.5625rem;
  cursor: pointer;
`;

const LogoIcon = styled(LogoIc)`
  width: 100%;
  height: 100%;
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
  const navigate = useNavigate();

  console.log(info);

  return (
    <HeaderContainer as="header">
      <LogoWrapper onClick={() => navigate("/vote/main")}>
        <LogoIcon />
      </LogoWrapper>
      <BtnContainer>{info && <UserName>{info} 님</UserName>}</BtnContainer>
    </HeaderContainer>
  );
}
