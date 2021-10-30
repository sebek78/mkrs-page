import styled from "styled-components";
import { BgColors } from "../../../helpers/theme";

type SectionProps = {
  children: React.ReactNode;
  bgColor?: BgColors;
};

interface StDiv {
  bgColor: BgColors;
}

const StyledDiv = styled.div<StDiv>`
  background-color: ${({ theme, bgColor }) =>
    theme.palette.backgroundColor[bgColor].color};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 48px 5vw;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 48px 4vw;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 48px 3vw;
  }
`;

const Section = ({ children, bgColor }: SectionProps) => {
  return (
    <StyledDiv bgColor={bgColor ? bgColor : "default"}>{children}</StyledDiv>
  );
};

export default Section;
