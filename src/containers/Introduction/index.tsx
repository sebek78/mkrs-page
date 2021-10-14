import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100vw;
  height: 400px;
  background-color: ${(props) =>
    props.theme.palette.backgroundColor.default.color};
`;

const Introduction = () => {
  return <StyledDiv></StyledDiv>;
};

export default Introduction;
