import VoteHeader from "@components/common/VoteHeader";
import VoteWrapper from "@components/common/VoteWrapper";
import VoteBtn from "@components/common/VoteBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FrontItems = [
  { key: 1, name: "김다희", team: "Buldog" },
  { key: 2, name: "김동혁", team: "BeatBuddy" },
  { key: 3, name: "김민영", team: "CoupleLog" },
  { key: 4, name: "김수현", team: "BeatBuddy" },
  { key: 5, name: "김승완", team: "TIG" },
  { key: 6, name: "송은수", team: "TIG" },
  { key: 7, name: "안혜연", team: "CoupleLog" },
  { key: 8, name: "이나현", team: "azito" },
  { key: 9, name: "이지인", team: "Buldog" },
  { key: 10, name: "조유담", team: "azito" },
];

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VoteItemWrappers = styled.div`
  display: flex;
  gap: 3.2rem 5.4rem;
  width: 103.6rem;
  height: 42.6rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 8.5rem;
`;

const TeamNameMid = styled.span`
  ${({ theme }) => theme.fonts.TeamName_Mid};
`;

const TeamNameSmall = styled.span`
  ${({ theme }) => theme.fonts.TeamName_Small};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3rem;
`;

export default function VoteFront() {
  const navigate = useNavigate();

  return (
    <Section>
      <VoteHeader />
      <HeaderText>FE 파트장 투표</HeaderText>
      <Wrapper>
        <VoteItemWrappers>
          {FrontItems.map((item) => (
            <VoteWrapper key={item.key}>
              <TeamNameSmall>{item.team}</TeamNameSmall>
              <TeamNameMid>{item.name}</TeamNameMid>
            </VoteWrapper>
          ))}
        </VoteItemWrappers>
        <ButtonWrapper>
          <VoteBtn text="투표하기" />
          <VoteBtn text="결과보기" onClick={() => navigate("/result/front")} />
        </ButtonWrapper>
      </Wrapper>
    </Section>
  );
}
