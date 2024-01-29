import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as S from './Slide.styles';
import slideImage1 from '../../../image/slideImage1.jpg';
import slideImage2 from '../../../image/slideImage2.jpg';
import slideImage3 from '../../../image/slideImage3.jpg';
import slideImage4 from '../../../image/slideImage3.jpg';

const images = [slideImage1, slideImage2, slideImage3, slideImage4];

const settings = {
  infinite: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
};

export default function Slide() {
  return (
    <S.SlideWrap>
      <S.StyledSlide {...settings}>
        {images.map((item, index) => (
          <div key={index}>
            <img src={item} alt={item} />
          </div>
        ))}
      </S.StyledSlide>
    </S.SlideWrap>
  );
}
