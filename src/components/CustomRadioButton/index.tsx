import { ChangeEvent, FC, memo } from 'react';

import { Label, Radio, Wrapper } from './styled';

interface ICustomRadioButton {
  value: string;
  label: string;
  isChecked: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomRadioButton: FC<ICustomRadioButton> = memo(
  ({ value, label, isChecked, handleChange }) => (
    <Wrapper>
      <Radio
        type='radio'
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />
      <Label>{label}</Label>
    </Wrapper>
  ),
);
