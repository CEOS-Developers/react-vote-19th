import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import VoteHeader from "@components/common/VoteHeader";
import VoteWrapper from "@components/common/VoteWrapper";
import VoteBtn from "@components/common/VoteBtn";
import { useGetVotingOptionsById } from "@hooks/useGetVotingOptionsById";
import { usePostVote } from "@hooks/usePostVote";

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

export default function Vote() {
  const { type } = useParams(); // useParams 훅을 통해 type 값을 받아와서 topicId와 HeaderText를 조건부로 설정
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const topicId = type === "front" ? 1 : 2;
  const { data } = useGetVotingOptionsById(topicId);
  const { mutate: postVoteMutate } = usePostVote();

  const handleSelected = (itemKey: any) => {
    setSelected(selected === itemKey ? null : itemKey);
  };

  const handleSubmit = () => {
    if (selected !== null) {
      postVoteMutate({
        topicId,
        votingOptionId: selected,
      });
    } else {
      console.error("선택된 항목이 없습니다.");
    }
  };

  if (data) {
    return (
      <Section>
        <VoteHeader />
        <CenterWrapper>
          <HeaderText>
            {type === "front" ? "FE 파트장 투표" : "BE 파트장 투표"}
          </HeaderText>
          <VoteWrappers>
            {data.map((item) => (
              <VoteWrapper
                key={item.id}
                onClick={() => handleSelected(item.id)}
                $isSelected={selected === item.id}>
                <TeamNameMidText>{item.name}</TeamNameMidText>
              </VoteWrapper>
            ))}
          </VoteWrappers>
          <ButtonWrapper>
            <VoteBtn text="투표하기" onClick={handleSubmit} />
            <VoteBtn
              text="결과보기"
              onClick={() => navigate(`/result/${type}`)}
            />
          </ButtonWrapper>
        </CenterWrapper>
      </Section>
    );
  }

  return null;
}
