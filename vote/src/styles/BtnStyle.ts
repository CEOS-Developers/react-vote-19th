import styled from "styled-components";

/*로그인 회원가입 페이지 버튼 스타일*/
export const BtnSign = styled.button`
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.SignBtnText};
`;

/*투표 페이지 상단 버튼 스타일*/
export const BtnSmall = styled.button`
  align-items: center;
  padding: 1rem 2rem;

  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.main_blue};
`;

/*투표 페이지 바로가기 버튼 스타일*/
export const BtnBig = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39.4rem;
  height: 40.6rem;

  border-radius: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.main_blue};

  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.BigBtnText};

  cursor: pointer;

  /* 마우스 오버 시 백그라운드 색상 및 텍스트 색상 변경 */
  &:hover {
    background-color: ${({ theme }) => theme.colors.main_blue};
    color: ${({ theme }) => theme.colors.white}; /* 텍스트 색상 변경 */
  }
`;

/*투표 페이지 하단 버튼 스타일*/
export const BtnMid = styled.button`
  align-items: center;
  width: 29.1rem;
  height: 8.2rem;

  border-radius: 2rem;
  border: none;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.MidBtnText};
`;
