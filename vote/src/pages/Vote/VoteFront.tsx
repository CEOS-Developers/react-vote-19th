import { useState } from "react";
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

const TeamNameSmallText = styled.span`
  ${({ theme }) => theme.fonts.TeamName_Small};
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1.3rem;
`;

export default function VoteFront() {
  const navigate = useNavigate();
  const [selectedFront, setSelectedFront] = useState(null);

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

  return (
    <Section>
      <VoteHeader />
      <CenterWrapper>
        <HeaderText>FE 파트장 투표</HeaderText>
        <VoteWrappers>
          {FrontItems.map((item) => (
            <VoteWrapper
              key={item.key}
              onClick={() => handleSelected(item.key)}
              $isSelected={selectedFront === item.key}>
              <TeamNameSmallText>{item.team}</TeamNameSmallText>
              <TeamNameMidText>{item.name}</TeamNameMidText>
            </VoteWrapper>
          ))}
        </VoteWrappers>
        <ButtonWrapper>
          <VoteBtn text="투표하기" onClick={handleSubmit} />
          <VoteBtn text="결과보기" onClick={() => navigate("/result/front")} />
        </ButtonWrapper>
      </CenterWrapper>
    </Section>
  );
}
