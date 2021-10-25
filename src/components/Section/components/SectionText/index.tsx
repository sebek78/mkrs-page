import styled from "styled-components";
import theme from "../../../../helpers/theme";

const StyledP = styled.p`
  color: ${theme.palette.contrastText.secondary};
  font-size: ${theme.typography.body2.mobile.fontSize};
  font-family: ${theme.typography.body2.fontFamily};
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    max-width: 25vw;
    margin: 0 auto;
  }
`;

type SectionTextProps = {
  text: string;
};

const SectionText = ({ text }: SectionTextProps) => <StyledP>{text}</StyledP>;

export default SectionText;
