import VoteBtn from "@components/common/VoteBtn";
import VoteHeader from "@components/common/VoteHeader";
import VoteWrapper from "@components/common/VoteWrapper";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.fonts.Headline1};
`;

export default function VoteMain() {
  return (
    <Section>
      <VoteHeader />
      <Header>파트장 / 데모데이 투표</Header>
      <VoteWrapper text="파트장 투표 바로가기" />
      <div>
        <VoteBtn text="결과보기" />
        <VoteBtn text="투표하기" />
        <VoteBtn text="돌아가기" />
      </div>
    </Section>
  );
}
