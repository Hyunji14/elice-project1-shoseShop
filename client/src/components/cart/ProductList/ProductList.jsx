import * as S from './ProductList.styles';
import CheckBox from '../Checkbox/Checkbox';
import Quantity from '../../common/Quantity/Quantity';

export default function ProductList() {
  return (
    <S.Container>
      <tbody>
        <tr>
          <td>
            <CheckBox />
          </td>
          <td>
            <S.Image>
              <img />
            </S.Image>
          </td>
          <td>
            <p>브랜드</p>
            <p>제품명</p>
          </td>
          <td>사이즈</td>
          <td>
            <Quantity />
          </td>
          <td>가격</td>
        </tr>
      </tbody>
    </S.Container>
  );
}
