import styled from "styled-components";

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
  background-color: ${(props) =>
    props.theme.palette.backgroundColor.light.color};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 21vw;
    height: 160px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 21vw;
  }
`;

const StyledH3 = styled.h3`
  color: ${(props) => props.theme.palette.primary.default};
  margin-bottom: 8px;
  font-weight: 400;
  font-size: ${(props) => props.theme.typography.h3.mobile.fontSize};
`;

const StyledP = styled.p`
  color: ${(props) => props.theme.palette.contrastText.secondary};
  font-size: ${(props) => props.theme.typography.body2.mobile.fontSize};
  font-family: ${(props) => props.theme.typography.body2.fontFamily};
`;

const SectionCard = ({ card }: CardProps) => {
  return (
    <StyledDiv>
      <StyledH3>{card.title}</StyledH3>
      <StyledP>{card.text}</StyledP>
    </StyledDiv>
  );
};

export default SectionCard;
