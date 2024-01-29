import styled from 'styled-components';
import Slider from 'react-slick';

export const SlideWrap = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
`;

export const StyledSlide = styled(Slider)`
  width: 100%;
  max-width: 100%;
  position: relative;

  .slider {
    max-width: 1110px;
    margin: 0 auto;
  }

  .slick-track {
    padding-top: 53px;
    padding-bottom: 53px;
  }

  .slick-slide {
    text-align: center;
    transition: transform 0.3s ease-in-out;
  }

  .slick-slide:not(.slick-current) {
    filter: brightness(0.5);
  }

  .slick-slide.slick-current {
    transform: scale(2.5);
    position: relative;
    z-index: 1;
  }

  .slick-slide img {
    width: 100%;
  }

  div {
    width: 100%;
  }
`;
