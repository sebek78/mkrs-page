import styled from "styled-components";
import theme from "../../../../helpers/theme";

const StyledH2 = styled.h2`
  color: ${theme.palette.contrastText.primary};
  font-size: ${theme.typography.h2.mobile.fontSize};
  font-family: ${theme.typography.h2.fontFamily};
  margin-bottom: 16px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${theme.typography.h2.tablet.fontSize};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${theme.typography.h2.desktop.fontSize};
    width: 25vw;
    text-align: left;
    margin: 0 auto 16px;
  }
`;

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => (
  <StyledH2>{title}</StyledH2>
);

export default SectionTitle;
