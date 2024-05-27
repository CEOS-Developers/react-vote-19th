import styled from "styled-components";
import { BtnSmall } from "@styles/BtnStyle";

interface SignBtnProps {
  text: string;
}

const Button = styled(BtnSmall)<{ $isSignUp: boolean }>`
  background-color: ${({ theme, $isSignUp }) =>
    $isSignUp ? theme.colors.main_blue : theme.colors.white};
  color: ${({ theme, $isSignUp }) =>
    $isSignUp ? theme.colors.white : theme.colors.black};
`;

export default function SignBtn(props: SignBtnProps) {
  const { text } = props;
  const $isSignUp = text === "회원가입";

  return (
    <Button $isSignUp={$isSignUp}>
      <p>{text}</p>
    </Button>
  );
}
