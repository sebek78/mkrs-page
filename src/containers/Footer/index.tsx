import styled from "styled-components";
import SectionContentWrapper from "../../components/SectionComponents/SectionContentWrapper";
import StyledTitle from "../../components/StyledTitle";
import SectionDescriptionWrapper from "../../components/SectionComponents/SectionDescriptionWrapper";
import SectionTitle from "../../components/SectionComponents/SectionTitle";
import Address from "./components/Address";
import Contact from "./components/Contact";

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

const Footer = () => {
  return (
    <>
      <SectionContentWrapper>
        <SectionDescriptionWrapper>
          <StyledDiv>
            <SectionTitle title="Kontakt" />
            <Contact />
          </StyledDiv>
        </SectionDescriptionWrapper>
        <SectionDescriptionWrapper>
          <StyledTitle>Dane do faktury</StyledTitle>
          <Address />
        </SectionDescriptionWrapper>
      </SectionContentWrapper>
    </>
  );
};

export default Footer;
