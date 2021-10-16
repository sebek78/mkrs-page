import styled from "styled-components";

const StyledImg = styled.img`
  display: block;
  width: 90vw;
  height: auto;
  padding: 8px;
  border: 2px solid ${(props) => props.theme.palette.primary.dark};
  border-radius: 8px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 44vw;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 45vw;
  }
`;

type SectionSingleImageProps = {
  src: string;
  alt: string;
};

const SectionSingleImage = ({ src, alt }: SectionSingleImageProps) => {
  return <StyledImg src={src} alt={alt} />;
};

export default SectionSingleImage;
