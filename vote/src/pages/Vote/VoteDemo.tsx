import VoteHeader from "@components/common/VoteHeader";
import VoteWrapper from "@components/common/VoteWrapper";
import VoteBtn from "@components/common/VoteBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DemoItems = [
  { key: 1, name: "azito" },
  { key: 2, name: "BeatBuddy" },
  { key: 3, name: "Buldog" },
  { key: 4, name: "CoupleLog" },
  { key: 5, name: "TIG" },
];

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VoteItemWrappers = styled.div`
  display: flex;
  gap: 3.3rem;
  width: 121.8rem;
  height: 32.3rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 8.5rem;
`;

const TeamNameMid = styled.span`
  ${({ theme }) => theme.fonts.TeamName_Mid};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3rem;
`;

export default function VoteDemo() {
  const navigate = useNavigate();

  return (
    <Section>
      <VoteHeader />
      <HeaderText>데모데이 투표</HeaderText>
      <Wrapper>
        <VoteItemWrappers>
          {DemoItems.map((item) => (
            <VoteWrapper key={item.key} width="38rem" height="14.5rem">
              <TeamNameMid>{item.name}</TeamNameMid>
            </VoteWrapper>
          ))}
        </VoteItemWrappers>
        <ButtonWrapper>
          <VoteBtn text="투표하기" />
          <VoteBtn text="결과보기" onClick={() => navigate("/result/demo")} />
        </ButtonWrapper>
      </Wrapper>
    </Section>
  );
}
