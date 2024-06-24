import { useState } from "react";
import VoteHeader from "@components/common/VoteHeader";
import VoteWrapper from "@components/common/VoteWrapper";
import VoteBtn from "@components/common/VoteBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGetTopicsById } from "@hooks/useGetTopicsById";

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
  margin-bottom: 8.5rem;

  ${({ theme }) => theme.fonts.Headline1};
`;

const VoteWrappers = styled.section`
  display: flex;
  justify-content: center;
  gap: 3.3rem;
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

export default function VoteDemo() {
  const navigate = useNavigate();
  const [selectedTeam, setSelectedTeam] = useState(null);
  const { data } = useGetTopicsById(3);

  const handleSelected = (itemKey: any) => {
    if (selectedTeam === itemKey) {
      setSelectedTeam(null);
    } else {
      setSelectedTeam(itemKey);
    }
  };

  const handleSubmit = () => {
    console.log("선택된 항목:", selectedTeam);
    /* API 연결 */
  };

  if (data && data.votingOptionDto) {
    return (
      <Section>
        <VoteHeader />
        <CenterWrapper>
          <HeaderText>데모데이 투표</HeaderText>
          <VoteWrappers>
            {data.votingOptionDto.map((item) => (
              <VoteWrapper
                key={item.id}
                width="38rem"
                height="14.5rem"
                onClick={() => handleSelected(item.id)}
                $isSelected={selectedTeam === item.id}>
                <TeamNameMidText>{item.name}</TeamNameMidText>
              </VoteWrapper>
            ))}
          </VoteWrappers>
          <ButtonWrapper>
            <VoteBtn text="투표하기" onClick={handleSubmit} />
            <VoteBtn text="결과보기" onClick={() => navigate("/result/demo")} />
          </ButtonWrapper>
        </CenterWrapper>
      </Section>
    );
  }
}
