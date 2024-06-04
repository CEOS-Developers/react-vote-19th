import VoteHeader from "@components/common/VoteHeader";
import VoteWrapper from "@components/common/VoteWrapper";
import VoteBtn from "@components/common/VoteBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  margin-top: 12.5rem;
  margin-bottom: 8.2rem;

  ${({ theme }) => theme.fonts.Headline1};
`;

const VoteWrappers = styled.section`
  display: flex;
  gap: 10rem;
  justify-content: space-between;
`;

const PartWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
`;
export default function VotePart() {
  const navigate = useNavigate();

  return (
    <Section>
      <VoteHeader />
      <CenterWrapper>
        <HeaderText>파트장 투표</HeaderText>
        <VoteWrappers>
          <PartWrapper>
            <VoteWrapper
              onClick={() => navigate("/vote/front")}
              width="39.4rem"
              height="40.6rem">
              FRONT-END
              <br />
              파트장 투표
            </VoteWrapper>
            <VoteBtn
              text="결과보기"
              onClick={() => navigate("/result/front")}
            />
          </PartWrapper>
          <PartWrapper>
            <VoteWrapper
              onClick={() => navigate("/vote/back")}
              width="39.4rem"
              height="40.6rem">
              BACK-END
              <br />
              파트장 투표
            </VoteWrapper>
            <VoteBtn text="결과보기" onClick={() => navigate("/result/back")} />
          </PartWrapper>
        </VoteWrappers>
      </CenterWrapper>
    </Section>
  );
}
