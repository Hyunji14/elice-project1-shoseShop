import * as S from './Content.styles';

import contentImage1 from '../../../image/contentImage1.jpg';
import contentImage2 from '../../../image/contentImage2.jpg';

const contents = [
  {
    image: contentImage1,
    title: 'ADIDAS HANDBALL',
    summary: '레트로한 디자인의 세련된 반란',
  },
  {
    image: contentImage2,
    title: 'GO WALK! SKECHERS',
    summary: '모든 길 위의 편안함',
  },
];

export default function Content() {
  return (
    <S.Container>
      {contents.map((content, index) => (
        <S.Wrap key={index}>
          <S.Image>
            <img src={content.image} alt={content.title} />
          </S.Image>
          <h2>{content.title}</h2>
          <p>{content.summary}</p>
        </S.Wrap>
      ))}
    </S.Container>
  );
}
