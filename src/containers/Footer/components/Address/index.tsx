import styled from "styled-components";

export const StyledDiv = styled.div`
  color: ${({ theme }) => theme.palette.contrastText.primary};
  font-size: ${({ theme }) => theme.typography.body2.mobile.fontSize};
  font-family: ${({ theme }) => theme.typography.body2.fontFamily};
`;

export const StyledH4 = styled.h4`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.palette.contrastText.primary};
  font-size: ${({ theme }) => theme.typography.body2.mobile.fontSize};
  font-family: ${({ theme }) => theme.typography.body2.fontFamily};
  margin-bottom: 16px;
  font-weight: normal;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.body2.tablet.fontSize};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.typography.body2.desktop.fontSize};
  }
  & p:first-child {
    margin-right: 8px;
  }
`;

const StyledAddress = styled.address`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-style: normal;
  font-size: ${({ theme }) => theme.typography.body.mobile.fontSize};
  margin-bottom: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.body.tablet.fontSize};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.typography.body.desktop.fontSize};
  }
  & p:first-child {
    margin-right: 8px;
  }
`;

export const StyledNumber = styled.p`
  font-style: normal;
  font-size: ${({ theme }) => theme.typography.body.mobile.fontSize};
  margin-bottom: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.body.tablet.fontSize};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.typography.body.desktop.fontSize};
  }
`;

const Address = () => {
  return (
    <StyledDiv>
      <StyledH4>
        <p>Nazwa Firmy</p>
        <p>Spółka z ograniczoną odpowiedzialnością</p>
      </StyledH4>
      <StyledAddress>
        <p>34-100 Wadowice</p>
        <p>ul. Fikcyjna 21</p>
      </StyledAddress>
      <StyledNumber>NIP: 123 45 67 890</StyledNumber>
      <StyledNumber>KRS: 9876543210</StyledNumber>
      <StyledNumber>REGON: 123456789</StyledNumber>
    </StyledDiv>
  );
};

export default Address;
