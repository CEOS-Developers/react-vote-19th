import VoteHeader from "@components/common/VoteHeader";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 10.9rem;
  margin-bottom: 4.3rem;

  ${({ theme }) => theme.fonts.Headline1};
`;

export default function VoteBack() {
  return (
    <Section>
      <VoteHeader />
      <HeaderText>BE 파트장 투표</HeaderText>
    </Section>
  );
}
