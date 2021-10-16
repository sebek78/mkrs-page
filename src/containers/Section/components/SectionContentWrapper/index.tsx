import styled from "styled-components";

type SectionContentWrapperProps = {
  children: React.ReactNode[];
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const SectionContentWrapper = ({ children }: SectionContentWrapperProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default SectionContentWrapper;
