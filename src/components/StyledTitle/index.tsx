import styled from "styled-components";

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.palette.primary.default};
  margin-bottom: 8px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.h3.mobile.fontSize};
`;

export default StyledTitle;
