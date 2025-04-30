import { createElement } from 'react';

type Props = {
  value?: Date;
  setValue: (newValue?: Date) => void;
};

export const DateInput = ({ value, setValue }: Props) =>
  createElement('input', {
    type: 'date',
    value: value,
    onChange: setValue,
  });
