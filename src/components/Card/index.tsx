import styled from "styled-components";
import StyledTitle from "../StyledTitle";

export type SectionCardType = {
  title: string;
  text: string;
};

type CardProps = {
  card: SectionCardType;
};

const StyledDiv = styled.div`
  width: 90vw;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.backgroundColor.light.color};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 21vw;
    height: 160px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 21vw;
  }
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.palette.contrastText.secondary};
  font-size: ${({ theme }) => theme.typography.body2.mobile.fontSize};
  font-family: ${({ theme }) => theme.typography.body2.fontFamily};
`;

const SectionCard = ({ card }: CardProps) => {
  return (
    <StyledDiv>
      <StyledTitle>{card.title}</StyledTitle>
      <StyledP>{card.text}</StyledP>
    </StyledDiv>
  );
};

export default SectionCard;
