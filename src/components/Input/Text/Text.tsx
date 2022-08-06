import React from "react";
import { TextField } from "@mui/material";

export interface InputTextProps {
  id: string;
  onChange?: (value: string) => void;
  label: string;
  defaultValue?: string | number;
}

const InputText = ({
  id,
  onChange,
  label,
  defaultValue
}: InputTextProps): React.ReactElement => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (typeof onChange === "function") onChange(e.target.value);
  };

  return (
    <div data-testid={`input-text-${id}`}>
      <TextField
        id={id}
        data-testid={`input-text-${id}`}
        defaultValue={defaultValue}
        name={`input-text-${id}`}
        type="text"
        label={label}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChangeInput(e)}
      />
    </div>
  );
};

InputText.defaultProps = {
  defaultValue: ""
};
export default InputText;
