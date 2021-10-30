import styled from "styled-components";
import { StyledH4, StyledNumber } from "../Address";

export const StyledDiv = styled.div`
  color: ${({ theme }) => theme.palette.contrastText.primary};
  font-size: ${({ theme }) => theme.typography.body2.mobile.fontSize};
  font-family: ${({ theme }) => theme.typography.body2.fontFamily};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 25vw;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.typography.body2.desktop.fontSize};
  }
`;

const Contact = () => {
  return (
    <StyledDiv>
      <StyledH4>
        <p>Telefon:</p>
        <p>+48 33 123 45 67</p>
      </StyledH4>
      <StyledNumber>Otwarte:</StyledNumber>
      <StyledNumber>Poniedziałek - Piątek: 7:00 - 16:00</StyledNumber>
      <StyledNumber>Sobota: 8:00 - 14:00</StyledNumber>
    </StyledDiv>
  );
};

export default Contact;
