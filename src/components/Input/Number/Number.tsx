import React from "react";
import { TextField } from "@mui/material";

export interface InputNumberProps {
  id: string;
  onChange?: (value: number) => void;
  label?: string;
  defaultValue?: number;
  disabled?: boolean;
}

const InputNumber = ({
  id,
  onChange,
  label,
  defaultValue,
  disabled
}: InputNumberProps): React.ReactElement => {
  const castValue = (value: number | string): number => {
    return value as number
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    if (typeof onChange === "function") {
      onChange(castValue(e.target.value));
    }
  };

  return (
    <div data-testid={`input-number-${id}`}>
      <TextField
        id={id}
        value={defaultValue}
        name={`input-number-${id}`}
        type="number"
        disabled={disabled}
        label={label}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChangeInput(e)}
      />
    </div>
  );
};

InputNumber.defaultProps = {
  defaultValue: 0,
  disabled: false,
  label: ""
};
export default InputNumber;
