import styled from "styled-components";
import theme from "../../../../helpers/theme";

const StyledP = styled.p`
  color: ${theme.palette.contrastText.secondary};
  font-size: ${theme.typography.body2.mobile.fontSize};
  font-family: ${theme.typography.body2.fontFamily};
`;

type SectionTextProps = {
  text: string;
};

const SectionText = ({ text }: SectionTextProps) => <StyledP>{text}</StyledP>;

export default SectionText;
