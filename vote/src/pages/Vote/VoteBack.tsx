import VoteHeader from "@components/common/VoteHeader";
import VoteWrapper from "@components/common/VoteWrapper";
import VoteBtn from "@components/common/VoteBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackItems = [
  { key: 1, name: "이진우", team: "Buldog" },
  { key: 2, name: "임형준", team: "BeatBuddy" },
  { key: 3, name: "박시영", team: "CoupleLog" },
  { key: 4, name: "박수빈", team: "BeatBuddy" },
  { key: 5, name: "장영환", team: "TIG" },
  { key: 6, name: "정기민", team: "TIG" },
  { key: 7, name: "김성현", team: "CoupleLog" },
  { key: 8, name: "이도현", team: "azito" },
  { key: 9, name: "전민", team: "Buldog" },
  { key: 10, name: "권찬", team: "azito" },
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

export default function VoteBack() {
  const navigate = useNavigate();

  return (
    <Section>
      <VoteHeader />
      <HeaderText>BE 파트장 투표</HeaderText>
      <Wrapper>
        <VoteItemWrappers>
          {BackItems.map((item) => (
            <VoteWrapper key={item.key}>
              <TeamNameSmall>{item.team}</TeamNameSmall>
              <TeamNameMid>{item.name}</TeamNameMid>
            </VoteWrapper>
          ))}
        </VoteItemWrappers>
        <ButtonWrapper>
          <VoteBtn text="투표하기" />
          <VoteBtn text="결과보기" onClick={() => navigate("/result/back")} />
        </ButtonWrapper>
      </Wrapper>
    </Section>
  );
}
