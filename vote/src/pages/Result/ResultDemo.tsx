import VoteHeader from "@components/common/VoteHeader";
import VoteWrapper from "@components/common/VoteWrapper";
import VoteBtn from "@components/common/VoteBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
  margin-top: 6.8rem;
  margin-bottom: 4.9rem;

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
  width: 65.7rem;
  justify-content: space-between;
`;

const LeftTextWrapper = styled.div`
  display: flex;
  gap: 5.73rem;
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
  width: 5.23rem;
  height: 5.8rem;
  padding: 0rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.main_blue};
  background: ${({ theme }) => theme.colors.main_blue};
`;

export default function ResultDemo() {
  const navigate = useNavigate();
  const { data } = useGetFinalResult(3);

  if (data) {
    return (
      <Section>
        <VoteHeader />
        <CenterWrapper>
          <HeaderText>BE 파트장 투표 결과</HeaderText>
          <VoteWrappers>
            {data.map((item) => (
              <VoteWrapper
                key={item.votingOptionId}
                width="77.48rem"
                height="8.5rem"
                $disableHover={true}
                $disableClick={true}>
                <TextWrapper>
                  <LeftTextWrapper>
                    <RankBox>2</RankBox>
                    <TeamNameMidText>{item.votingOptionName}</TeamNameMidText>
                  </LeftTextWrapper>
                  <CountText>{item.votingOptionCount}</CountText>
                </TextWrapper>
              </VoteWrapper>
            ))}
          </VoteWrappers>
          <VoteBtn text="돌아가기" onClick={() => navigate(-1)} />
        </CenterWrapper>
      </Section>
    );
  }
}
