import logo from "../../../../assets/logo192.png";
import styled from "styled-components";
import { memo } from "react";

const StyledImg = styled.img`
  height: 80px;
  width: 80px;
`;

const Logo = memo(() => <StyledImg src={logo} alt="Logo" />);

export default Logo;
