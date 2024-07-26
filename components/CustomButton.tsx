"use client";

type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: () => void;
  btnType?: "button" | "submit" | "reset"; // Add btnType property
};

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button
      type={btnType} // Use btnType here
      className={containerStyles}
      onClick={handleClick}
      disabled={false}
    >
      {title}
    </button>
  );
};
