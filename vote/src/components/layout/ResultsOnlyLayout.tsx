import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LogoIc } from "@assets/index";
import VoteBtn from "@components/common/VoteBtn";

const LogoWrapper = styled.div`
  width: 10.75rem;
  height: 4.5625rem;
  cursor: pointer;
`;

const LogoIcon = styled(LogoIc)`
  width: 100%;
  height: 100%;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

/** RootLayout */
export default function ResultsOnlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();

  return (
    <>
      <LogoWrapper onClick={() => navigate("/signin")}>
        <LogoIcon />
      </LogoWrapper>
      <>{children}</>
      <BtnWrapper>
        <VoteBtn text="투표하기" onClick={() => navigate("/signin")} />
      </BtnWrapper>
    </>
  );
}
