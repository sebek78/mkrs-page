import styled from "styled-components";
import { SectionCardType } from "../../Card";
import SectionCard from "../../Card";

type SectionCardListProps = {
  cards: Array<SectionCardType>;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90vw;
  height: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 44vw;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 45vw;
  }
`;

const SectionCardList = ({ cards }: SectionCardListProps) => {
  return (
    <StyledDiv>
      {cards.map((card: SectionCardType) => (
        <SectionCard key={card.title} card={card} />
      ))}
    </StyledDiv>
  );
};

export default SectionCardList;
