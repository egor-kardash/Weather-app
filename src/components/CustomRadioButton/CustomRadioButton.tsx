import React, { ChangeEvent } from 'react';

import { Label, Radio, Wrapper } from './components';

interface ICustomRadioButton {
  value: string;
  label: string;
  isChecked: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomRadioButton: React.FC<ICustomRadioButton> = ({
  value,
  label,
  isChecked,
  handleChange,
}) => {
  return (
    <Wrapper>
      <Radio
        type='radio'
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />
      <Label>{label}</Label>
    </Wrapper>
  );
};
