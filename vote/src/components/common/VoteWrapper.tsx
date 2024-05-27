import styled from "styled-components";
import { BtnBig } from "@styles/BtnStyle";

interface VoteWrapperProps {
  text: string;
}

const Button = styled(BtnBig)``;

export default function VoteWrapper(props: VoteWrapperProps) {
  const { text } = props;

  return (
    <Button>
      <p>{text}</p>
    </Button>
  );
}
