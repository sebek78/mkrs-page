import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SectionContentWrapper from "../../components/SectionComponents/SectionContentWrapper";
import SectionDescription from "../../components/SectionComponents/SectionDescription";

const CarouselWrapper = styled.div`
  width: 90vw;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 44vw;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 45vw;
  }
`;

const StyledCarousel = styled(Carousel)`
  & .slide .legend {
    background-color: ${({ theme }) =>
      theme.palette.backgroundColor.dark.color};
    font-size: ${({ theme }) => theme.typography.body.mobile.fontSize};
  }
  & .control-dots .dot {
    background-color: ${({ theme }) => theme.palette.primary.default};
  }
  & .control-next.control-arrow:before {
    border-left-color: ${({ theme }) => theme.palette.primary.default};
  }
  & .control-prev.control-arrow:before {
    border-right-color: ${({ theme }) => theme.palette.primary.default};
  }
`;

// FIXME: showThumbs must be false https://github.com/leandrowd/react-responsive-carousel/issues/454
// TODO:  wait for PR https://github.com/leandrowd/react-responsive-carousel/pull/656

const ResponsiveCarousel = () => {
  return (
    <SectionContentWrapper>
      <SectionDescription
        title="Nasze ostatnie realizacje"
        text="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        "
      />
      <CarouselWrapper>
        <StyledCarousel showThumbs={false}>
          <div>
            <img src="https://via.placeholder.com/480x320" alt="" />
            <p className="legend">Opis 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/481x320" alt="" />
            <p className="legend">Opis 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/482x320" alt="" />
            <p className="legend">Następy będzie bez opisu</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/483x320" alt="" />
          </div>
        </StyledCarousel>
      </CarouselWrapper>
    </SectionContentWrapper>
  );
};

export default ResponsiveCarousel;
