import VoteHeader from "@components/common/VoteHeader";
import VoteWrapper from "@components/common/VoteWrapper";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 12.5rem;
  margin-bottom: 8.2rem;

  ${({ theme }) => theme.fonts.Headline1};
`;

const VoteWrappers = styled.div`
  display: flex;
  gap: 10rem;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
`;

export default function VoteMain() {
  const navigate = useNavigate();

  return (
    <Section>
      <VoteHeader />
      <HeaderText>파트장 / 데모데이 투표</HeaderText>
      <VoteWrappers>
        <VoteWrapper
          onClick={() => navigate("/vote/select/part")}
          width="39.4rem"
          height="40.6rem">
          파트장 투표
          <br />
          바로가기
        </VoteWrapper>
        <VoteWrapper
          onClick={() => navigate("/vote/select/demo")}
          width="39.4rem"
          height="40.6rem">
          데모데이 투표
          <br />
          바로가기
        </VoteWrapper>
      </VoteWrappers>
    </Section>
  );
}
