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

  ${({ theme }) => theme.fonts.Headline1};
`;

const SubTitleText = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;

  ${({ theme }) => theme.fonts.TeamName_Small};
  color: ${({ theme }) => theme.colors.confirm};
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
        <SubTitleText>* 본인 파트 + 한 번 투표할 수 있습니다</SubTitleText>
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
