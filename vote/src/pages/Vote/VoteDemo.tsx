import VoteHeader from "@components/common/VoteHeader";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 12.5rem;
  margin-bottom: 8.5rem;

  ${({ theme }) => theme.fonts.Headline1};
`;

export default function VoteBack() {
  return (
    <Section>
      <VoteHeader />
      <HeaderText>데모데이 투표</HeaderText>
    </Section>
  );
}
