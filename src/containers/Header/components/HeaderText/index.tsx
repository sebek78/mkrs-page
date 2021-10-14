import { memo } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  width: max-content;
  padding: 0 16px;
  & h1 {
    font-weight: 300;
    font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
  }
  & h2 {
    font-weight: 300;
    font-size: ${(props) => props.theme.typography.h2.mobile.fontSize};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    & h1 {
      font-size: ${(props) => props.theme.typography.h1.tablet.fontSize};
    }
    & h2 {
      font-size: ${(props) => props.theme.typography.h2.tablet.fontSize};
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    & h1 {
      font-size: ${(props) => props.theme.typography.h1.desktop.fontSize};
    }
    & h2 {
      font-size: ${(props) => props.theme.typography.h2.tablet.fontSize};
    }
  }
`;

const HeaderText = memo(() => (
  <StyledWrapper>
    <h1>Pracownia artystyczna</h1>
    <h2>Jan Kowalski</h2>
  </StyledWrapper>
));

export default HeaderText;
