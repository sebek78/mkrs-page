import styled from "styled-components";

const StyledP = styled.p`
  text-align: center;
  width: 100%auto;
`;

const StyledSpan = styled.span`
  white-space: nowrap;
`;

const Copyrights = () => {
  return (
    <StyledP>
      <StyledSpan>{`© Copyright by Nazwa Firmy ${new Date().getFullYear()},`}</StyledSpan>{" "}
      <StyledSpan>{`Wszelkie prawa zastrzeżone`}</StyledSpan>
    </StyledP>
  );
};

export default Copyrights;
