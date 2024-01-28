import * as S from './Address.styles';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function Address() {
  return (
    <>
      <S.Flex>
        <p>받는분</p>
        <Input size="medium" placeholder="받는 분을 입력해주세요." />
      </S.Flex>
      <p>주소</p>
      <Input size="large" placeholder="주소를 입력해주세요." />
      <Button size="small" color="gray" text="주소찾기" />
      <Input size="large" placeholder="상세 주소를 입력해주세요." />
    </>
  );
}
