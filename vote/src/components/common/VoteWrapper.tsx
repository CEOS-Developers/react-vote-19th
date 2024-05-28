import styled from "styled-components";
import { BtnBig } from "@styles/BtnStyle";

interface VoteWrapperProps {
  text: string;
  onClick: any;
}

const Button = styled(BtnBig)``;

const ButtonText = styled.p`
  width: 28.3rem;
  flex-shrink: 0;
`;

export default function VoteWrapper(props: VoteWrapperProps) {
  const { text, onClick } = props;

  return (
    <Button>
      <ButtonText onClick={onClick}>{text}</ButtonText>
    </Button>
  );
}
