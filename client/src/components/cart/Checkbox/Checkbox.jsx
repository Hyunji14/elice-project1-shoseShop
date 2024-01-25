import { useState } from 'react';
import * as S from './Checkbox.styles';

export default function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  const onClickCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <S.Label htmlFor="checkbox">
      <S.Input
        type="checkbox"
        id="checkbox"
        onClick={onClickCheck}
        isChecked={isChecked}
      />
    </S.Label>
  );
}
