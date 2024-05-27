import styled from "styled-components";
import { BtnMid } from "@styles/BtnStyle";

interface VoteBtnProps {
  text: string;
}

const Button = styled(BtnMid)<{ $seeResult: boolean }>`
  background-color: ${({ theme, $seeResult }) =>
    $seeResult ? theme.colors.light_blue : theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
`;

export default function VoteBtn(props: VoteBtnProps) {
  const { text } = props;
  const $seeResult = text === "결과보기";

  return (
    <Button $seeResult={$seeResult}>
      <p>{text}</p>
    </Button>
  );
}
