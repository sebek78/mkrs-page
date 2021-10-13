import { memo } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Cormorant Garamond", serif;
  & h1 {
    font-weight: 300;
    font-size: 32px;
  }
  & h2 {
    font-weight: 300;
    font-size: 26px;
  }
  @media (min-width: 768px) {
    & h1 {
      font-size: 40px;
    }
    & h2 {
      font-size: 32px;
    }
  }
  @media (min-width: 1024px) {
    & h1 {
      font-size: 48px;
    }
    & h2 {
      font-size: 36px;
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
