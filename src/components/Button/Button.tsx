import { Button as ButtonMUI } from "@mui/material";

export interface ButtonProps {
  id: string;
  onClick?: () => void;
  label: string;
  variant?: "text" | "outlined" | "contained";
}

const Button = ({ id, onClick, label, variant }: ButtonProps): React.ReactElement => {
  const onClickButton = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (typeof onClick === "function") onClick();
  };

  return (
    <ButtonMUI
      id={`button-${id}`}
      data-testid={`button-${id}`}
      variant={variant}
      onClick={(e: React.MouseEvent<HTMLElement>) => onClickButton(e)}
    >
      {label}
    </ButtonMUI>
  );
};

Button.defaultProps = {
  variant: "contained"
};
export default Button;
