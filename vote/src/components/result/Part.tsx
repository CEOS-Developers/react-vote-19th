import { useParams } from "react-router-dom";
import styled from "styled-components";
import VoteWrapper from "@components/common/VoteWrapper";
import { useGetFinalResult } from "@hooks/useGetFinalResult";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const CenterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 7.1rem;
  margin-bottom: 3.3rem;

  ${({ theme }) => theme.fonts.Headline1};
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

const CountText = styled.span`
  ${({ theme }) => theme.fonts.Count};
`;

const RankBox = styled.div`
  ${({ theme }) => theme.fonts.Rank};
  display: inline-flex;
  height: 5.8rem;
  padding: 0rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.main_blue};
  background: ${({ theme }) => theme.colors.main_blue};
`;

export default function Part() {
  const { type } = useParams(); // useParams 훅을 통해 type 값을 받아와서 topicId와 HeaderText를 조건부로 설정
  const topicId = type === "front" ? 1 : 2;
  const { data } = useGetFinalResult(topicId);

  if (data) {
    // votingOptionCount 기준으로 data를 내림차순 정렬
    const sortedData = [...data].sort(
      (a, b) => b.votingOptionCount - a.votingOptionCount,
    );

    return (
      <Section>
        <CenterWrapper>
          <HeaderText>
            {type === "front" ? "FE 파트장 투표 결과" : "BE 파트장 투표 결과"}
          </HeaderText>
          <VoteWrappers>
            {sortedData.map((item, index) => (
              <VoteWrapper
                key={item.votingOptionId}
                width="49.2rem"
                height="8.5rem"
                $disableHover={true}
                $disableClick={true}>
                <TextWrapper>
                  <LeftTextWrapper>
                    <RankBox>{index + 1}</RankBox>
                    <TeamNameMidText>{item.votingOptionName}</TeamNameMidText>
                  </LeftTextWrapper>
                  <CountText>{item.votingOptionCount}</CountText>
                </TextWrapper>
              </VoteWrapper>
            ))}
          </VoteWrappers>
        </CenterWrapper>
      </Section>
    );
  }
}
