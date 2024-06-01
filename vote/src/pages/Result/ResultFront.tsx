import VoteHeader from "@components/common/VoteHeader";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 7.1rem;
  margin-bottom: 3.3rem;

  ${({ theme }) => theme.fonts.Headline1};
`;

export default function VoteFront() {
  return (
    <Section>
      <VoteHeader />
      <HeaderText>FE 파트장 투표 결과</HeaderText>
    </Section>
  );
}
