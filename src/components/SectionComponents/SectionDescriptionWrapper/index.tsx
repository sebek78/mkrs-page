import styled from "styled-components";

const SectionDescriptionWrapper = styled.div`
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

export default SectionDescriptionWrapper;
