export type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset"; // Ensure btnType includes "reset"
};
