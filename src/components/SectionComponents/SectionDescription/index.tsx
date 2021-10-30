import styled from "styled-components";
import SectionText from "../SectionText";
import SectionTitle from "../SectionTitle";

type SectionContentProps = {
  title: string;
  text: string;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90vw;
  height: 100%;
  margin-bottom: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 44vw;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 45vw;
  }
`;

const SectionDescription = ({ title, text }: SectionContentProps) => {
  return (
    <StyledDiv>
      <SectionTitle title={title} />
      <SectionText text={text} />
    </StyledDiv>
  );
};

export default SectionDescription;
