import styled from "styled-components";
import { BtnBig } from "@styles/BtnStyle";

interface VoteWrapperProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = styled(BtnBig)``;

const ButtonText = styled.p``;

export default function VoteWrapper(props: VoteWrapperProps) {
  const { onClick, children } = props;

  return (
    <Button>
      <ButtonText onClick={onClick}>{children}</ButtonText>
    </Button>
  );
}
