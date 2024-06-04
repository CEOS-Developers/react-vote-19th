import VoteHeader from "@components/common/VoteHeader";
import VoteWrapper from "@components/common/VoteWrapper";
import VoteBtn from "@components/common/VoteBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackItems = [
  { key: 1, name: "이진우", team: "Buldog", count: 1 },
  { key: 2, name: "임형준", team: "BeatBuddy", count: 1 },
  { key: 3, name: "박시영", team: "CoupleLog", count: 1 },
  { key: 4, name: "박수빈", team: "BeatBuddy", count: 1 },
  { key: 5, name: "장영환", team: "TIG", count: 1 },
  { key: 6, name: "정기민", team: "TIG", count: 1 },
  { key: 7, name: "김성현", team: "CoupleLog", count: 1 },
  { key: 8, name: "이도현", team: "azito", count: 1 },
  { key: 9, name: "전민", team: "Buldog", count: 1 },
  { key: 10, name: "권찬", team: "azito", count: 1 },
];

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

const CenterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VoteWrappers = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50.1rem;
  flex-wrap: wrap;
  gap: 1.9rem 4.8rem;
  margin-bottom: 7.4rem;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 42.7rem;
  justify-content: space-between;
`;

const LeftTextWrapper = styled.div`
  display: flex;
  gap: 2.7rem;
  align-items: center;
`;

const TeamNameMidText = styled.span`
  ${({ theme }) => theme.fonts.TeamName_Mid};
`;

const TeamNameSmallText = styled.span`
  ${({ theme }) => theme.fonts.TeamName_Small};
`;

const CountText = styled.span`
  ${({ theme }) => theme.fonts.Count};
`;

const RankBox = styled.div`
  ${({ theme }) => theme.fonts.Rank};
  display: inline-flex;
  height: 5.8rem;
  padding: 0rem 2rem;
  align-items: center;
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.main_blue};
  background: ${({ theme }) => theme.colors.main_blue};
`;

export default function ResultFront() {
  const navigate = useNavigate();
  /* const Data = API 연결 . . 지금은 그냥 예시 */

  return (
    <Section>
      <VoteHeader />
      <CenterWrapper>
        <HeaderText>BE 파트장 투표 결과</HeaderText>
        <VoteWrappers>
          {BackItems.map((item) => (
            <VoteWrapper
              key={item.key}
              width="49.2rem"
              height="8.5rem"
              $disableHover={true}
              $disableClick={true}>
              <TextWrapper>
                <LeftTextWrapper>
                  <RankBox>2</RankBox>
                  <TeamNameMidText>{item.name}</TeamNameMidText>
                  <TeamNameSmallText>{item.team}</TeamNameSmallText>
                </LeftTextWrapper>
                <CountText>{item.count}</CountText>
              </TextWrapper>
            </VoteWrapper>
          ))}
        </VoteWrappers>
        <VoteBtn text="돌아가기" onClick={() => navigate(-1)} />
      </CenterWrapper>
    </Section>
  );
}
