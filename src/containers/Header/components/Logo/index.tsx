import logo from "../../../../assets/logo192.png";
import styled from "styled-components";
import { memo } from "react";

const StyledImg = styled.img`
  height: 40px;
  width: 40px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 60px;
    height: 60px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 80px;
    height: 80px;
  }
`;

const Logo = memo(() => <StyledImg src={logo} alt="Logo" />);

export default Logo;
