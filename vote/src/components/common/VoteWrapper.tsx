import styled from "styled-components";
import { BtnBig } from "@styles/BtnStyle";

interface VoteWrapperProps {
  onClick?: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
  $isSelected?: boolean;
}

const VoteButton = styled(BtnBig)<{
  width?: string;
  height?: string;
  $isSelected?: boolean;
}>`
  width: ${({ width }) => width || "21.6rem"}; /* 파트장투표는 21.6 */
  height: ${({ height }) => height || "11.7rem"};
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.main_blue : theme.colors.white};
  ${({ $isSelected, theme }) =>
    $isSelected &&
    `
    span {
      color: ${theme.colors.white};
    }
  `}

  &:hover {
    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export default function VoteWrapper(props: VoteWrapperProps) {
  const { onClick, children, width, height, $isSelected } = props;

  return (
    <VoteButton
      onClick={onClick}
      width={width}
      height={height}
      $isSelected={$isSelected}>
      {children}
    </VoteButton>
  );
}
