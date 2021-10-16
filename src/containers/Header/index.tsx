import styled from "styled-components";
import HeaderText from "./components/HeaderText";
import Logo from "./components/Logo";
import SocialIcons from "../SocialIcons";

const StyledHeader = styled.header`
  width: 100%;
  height: 160px;
  padding: 0 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 160px;
    padding: 0 4vw;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    height: 200px;
    padding: 0 3vw;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <HeaderText />
      <SocialIcons />
    </StyledHeader>
  );
};

export default Header;
