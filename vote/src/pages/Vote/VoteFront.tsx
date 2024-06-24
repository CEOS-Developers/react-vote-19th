import { useState } from "react";
import VoteHeader from "@components/common/VoteHeader";
import VoteWrapper from "@components/common/VoteWrapper";
import VoteBtn from "@components/common/VoteBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGetTopicsById } from "@hooks/useGetTopicsById";

//const { data } = useGetMyPageComment();

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
  margin-top: 10.9rem;
  margin-bottom: 4.3rem;

  ${({ theme }) => theme.fonts.Headline1};
`;

const VoteWrappers = styled.section`
  display: flex;
  justify-content: center;
  gap: 3.2rem 5.4rem;
  flex-wrap: wrap;
  margin-bottom: 8.5rem;
`;

const TeamNameMidText = styled.span`
  ${({ theme }) => theme.fonts.TeamName_Mid};
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1.3rem;
`;

export default function VoteFront() {
  const navigate = useNavigate();
  const [selectedFront, setSelectedFront] = useState(null);
  const { data } = useGetTopicsById(1);

  const handleSelected = (itemKey: any) => {
    if (selectedFront === itemKey) {
      setSelectedFront(null);
    } else {
      setSelectedFront(itemKey);
    }
  };

  const handleSubmit = () => {
    console.log("선택된 항목:", selectedFront);
    /* API 연결 */
  };

  if (data && data.votingOptionDto) {
    return (
      <Section>
        <VoteHeader />
        <CenterWrapper>
          <HeaderText>FE 파트장 투표</HeaderText>
          <VoteWrappers>
            {data.votingOptionDto.map((item) => (
              <VoteWrapper
                key={item.id}
                onClick={() => handleSelected(item.id)}
                $isSelected={selectedFront === item.id}>
                <TeamNameMidText>{item.name}</TeamNameMidText>
              </VoteWrapper>
            ))}
          </VoteWrappers>
          <ButtonWrapper>
            <VoteBtn text="투표하기" onClick={handleSubmit} />
            <VoteBtn
              text="결과보기"
              onClick={() => navigate("/result/front")}
            />
          </ButtonWrapper>
        </CenterWrapper>
      </Section>
    );
  }
}
