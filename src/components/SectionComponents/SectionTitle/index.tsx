import styled from "styled-components";

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.palette.contrastText.primary};
  font-size: ${({ theme }) => theme.typography.h2.mobile.fontSize};
  font-family: ${({ theme }) => theme.typography.h2.fontFamily};
  margin-bottom: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.h2.tablet.fontSize};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.typography.h2.desktop.fontSize};
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
