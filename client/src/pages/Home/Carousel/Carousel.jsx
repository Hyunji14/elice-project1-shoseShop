import { useRef, useCallback } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import visualImage1 from '../../../image/visualImage1.jpg';
import visualImage2 from '../../../image/visualImage2.jpg';
import visualImage3 from '../../../image/visualImage3.jpg';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import * as S from './Carousel.styles';
const images = [visualImage1, visualImage2, visualImage3];

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerPadding: '0px',
};

export default function Carousel() {
  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);
  return (
    <S.SlideWrap>
      <S.StyledSlide {...settings} ref={slickRef}>
        {images.map((item, index) => (
          <div key={index}>
            <img src={item} alt={item} />
          </div>
        ))}
      </S.StyledSlide>
      <S.ButtonWrap>
        <button onClick={previous}>
          <IoChevronBackOutline size={80} opacity={0.4} />
        </button>
        <button onClick={next}>
          <IoChevronForwardOutline size={80} opacity={0.4} />
        </button>
      </S.ButtonWrap>
    </S.SlideWrap>
  );
}
