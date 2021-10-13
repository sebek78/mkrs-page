import styled from "styled-components";
import HeaderText from "./components/HeaderText";
import Logo from "./components/Logo";

const StyledHeader = styled.header`
  width: 90vw;
  height: 200px;
  margin: 0 auto;
  border-bottom: 1px solid #c0c0c0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <HeaderText />
    </StyledHeader>
  );
};

export default Header;
