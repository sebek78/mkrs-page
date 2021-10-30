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
  h1 p:first-child {
    font-weight: 300;
    font-size: ${({ theme }) => theme.typography.h1.mobile.fontSize};
  }
  h1 p:last-child {
    font-weight: 300;
    font-size: ${({ theme }) => theme.typography.h2.mobile.fontSize};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h1 p:first-child {
      font-size: ${({ theme }) => theme.typography.h1.tablet.fontSize};
    }
    h1 p:last-child {
      font-size: ${({ theme }) => theme.typography.h2.tablet.fontSize};
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    h1 p:first-child {
      font-size: ${({ theme }) => theme.typography.h1.desktop.fontSize};
    }
    h1 p:last-child {
      font-size: ${({ theme }) => theme.typography.h2.desktop.fontSize};
    }
  }
`;

const HeaderText = memo(() => (
  <StyledWrapper>
    <h1>
      <p>Pracownia artystyczna</p>
      <p>Jan Kowalski</p>
    </h1>
  </StyledWrapper>
));

export default HeaderText;
