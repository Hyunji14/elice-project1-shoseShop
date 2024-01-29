import styled from 'styled-components';
import Slider from 'react-slick';

export const SlideWrap = styled.div`
  width: 100%;
  height: 40vw;
  overflow: hidden;
`;

export const StyledSlide = styled(Slider)`
  width: 100%;
  max-width: 100%;
  position: relative;

  .slick-list {
    position: absolute;
    overflow: hidden;
  }

  .slick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-dots {
    position: absolute;
    top: 50vh;
  }

  img {
    width: 100vw;
    max-width: 100%;
    height: 100%;
  }
`;

export const ButtonWrap = styled.div`
  top: 25%;
  display: flex;
  justify-content: space-between;
  margin-top: 12%;
`;
