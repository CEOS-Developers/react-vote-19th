import VoteHeader from "@components/common/VoteHeader";
import VoteBtn from "@components/common/VoteBtn";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 19.5rem;
  margin-bottom: 14.3rem;

  ${({ theme }) => theme.fonts.Headline1};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
  justify-content: center;
  align-items: center;
`;

export default function VoteDemo() {
  return (
    <Section>
      <VoteHeader />
      <HeaderText>데모데이 투표</HeaderText>
      <ButtonWrapper>
        <VoteBtn text="투표하기" />
        <VoteBtn text="결과보기" />
      </ButtonWrapper>
    </Section>
  );
}
