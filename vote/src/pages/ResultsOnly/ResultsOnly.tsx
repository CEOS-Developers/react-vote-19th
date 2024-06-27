import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ResultsOnlyLayout from "@components/layout/ResultsOnlyLayout";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const CenterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 5rem 5rem;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 8.2rem;
  margin-bottom: 8.2rem;

  ${({ theme }) => theme.fonts.Headline1};
`;

const VoteWrappers = styled.section`
  display: flex;
  gap: 5rem;
  justify-content: space-between;
`;

const VoteWrapper = styled.button`
  width: 30rem;
  height: 30rem;

  ${({ theme }) => theme.fonts.Headline2};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.main_blue};
`;

export default function ResultsOnly() {
  const navigate = useNavigate();

  return (
    <ResultsOnlyLayout>
      <Section>
        <CenterWrapper>
          <HeaderText>결과 보기</HeaderText>
          <VoteWrappers>
            <VoteWrapper onClick={() => navigate("/results-only/front")}>
              FE 파트장 투표결과
              <br />
              바로가기
            </VoteWrapper>
            <VoteWrapper onClick={() => navigate("/results-only/back")}>
              BE 파트장 투표결과
              <br />
              바로가기
            </VoteWrapper>
            <VoteWrapper onClick={() => navigate("/results-only/demo")}>
              데모데이 투표결과
              <br />
              바로가기
            </VoteWrapper>
          </VoteWrappers>
        </CenterWrapper>
      </Section>
    </ResultsOnlyLayout>
  );
}
