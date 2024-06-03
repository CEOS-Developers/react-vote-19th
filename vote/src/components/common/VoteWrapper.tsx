import styled from "styled-components";
import { BtnBig } from "@styles/BtnStyle";

interface VoteWrapperProps {
  onClick?: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const Button = styled(BtnBig)<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "21.6rem"}; /* 파트장투표는 21.6 */
  height: ${({ height }) => height || "11.7rem"};
  &:hover {
    span {
      color: ${({ theme }) => theme.colors.white}; /* 텍스트 색상 변경 */
    }
  }
`;

export default function VoteWrapper(props: VoteWrapperProps) {
  const { onClick, children, width, height } = props;

  return (
    <Button onClick={onClick} width={width} height={height}>
      {children}
    </Button>
  );
}
