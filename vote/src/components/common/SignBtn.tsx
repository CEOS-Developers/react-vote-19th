import styled from "styled-components";
import { BtnSmall } from "@styles/BtnStyle";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  function movePages() {
    $isSignUp ? navigate("/signup") : navigate("/signin");
  }

  return (
    <Button $isSignUp={$isSignUp} onClick={movePages}>
      <p>{text}</p>
    </Button>
  );
}
