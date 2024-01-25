import Select from 'react-select';
import * as S from './Select.styles';

const options = [
  { value: '220', label: '220' },
  { value: '225', label: '225' },
  { value: '230', label: '230' },
];

export default function SelectOption() {
  return (
    <S.Container>
      <Select options={options} placeholder="사이즈를 선택해주세요." />
    </S.Container>
  );
}
