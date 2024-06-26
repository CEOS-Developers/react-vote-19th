import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {

  const token = localStorage.getItem('accessToken');

  return (
    <HeaderContainer>
      <MainIcon>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          ceos
        </Link>
      </MainIcon>
      <BtnWrapper>
        <StyledLink to="/login">login</StyledLink>
        {!token && <StyledLink to="/signup">sign up</StyledLink>}
      </BtnWrapper>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 8vh;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
`;

const MainIcon = styled.div`
  cursor: pointer;
  font-size: 3.5rem;
  font-weight: 600;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${({theme})=> theme.colors.yellow}
  }
`;