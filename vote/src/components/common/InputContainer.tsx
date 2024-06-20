import { ReactNode } from "react";
import styled from "styled-components";

interface InputContainerProps {
  name?: string;
  state?: string;
  setState?: React.Dispatch<React.SetStateAction<string>>;
  custom?: boolean;
  children?: ReactNode;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 60%;
  align-items: center;

  & label {
    ${({ theme }) => theme.fonts.TeamName_Small};
  }

  & input {
    height: 2.5rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
  }

  & > div {
    display: grid;
    grid-template-columns: 8fr 2fr;
    gap: 1rem;
  }
`;

export default function InputContainer({
  custom = false, // provide default value
  name,
  state,
  setState,
  children,
}: InputContainerProps) {
  if (custom) {
    return <Container>{children}</Container>;
  }

  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        id={name}
        value={state}
        placeholder={name}
        onChange={(e) => setState?.(e.target.value)}
      />
    </Container>
  );
}
