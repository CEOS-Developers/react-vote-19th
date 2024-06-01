import VoteHeader from "@components/common/VoteHeader";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 6.8rem;
  margin-bottom: 4.9rem;

  ${({ theme }) => theme.fonts.Headline1};
`;

export default function VoteFront() {
  return (
    <Section>
      <VoteHeader />
      <HeaderText>데모데이 투표 결과</HeaderText>
    </Section>
  );
}
