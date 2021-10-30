import styled from "styled-components";

const StyledP = styled.p`
  color: ${({ theme }) => theme.palette.contrastText.secondary};
  font-size: ${({ theme }) => theme.typography.body2.mobile.fontSize};
  font-family: ${({ theme }) => theme.typography.body2.fontFamily};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.body2.tablet.fontSize};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 25vw;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.typography.body2.desktop.fontSize};
  }
`;

type SectionTextProps = {
  text: string;
};

const SectionText = ({ text }: SectionTextProps) => <StyledP>{text}</StyledP>;

export default SectionText;
