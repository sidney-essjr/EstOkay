import { ComponentPropsWithRef, memo } from "react";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant?: "default" | "success" | "attention" | "neutral" | "none";
  className?: string;
};

const Button = memo(({ variant = "default", className = "", children, ...rest }: ButtonProps) => {
  let bgStyle = "";
  const style = className;

  switch (variant) {
    case "success":
      bgStyle = "bg-success-color";
      break;
    case "attention":
      bgStyle = "bg-attention-color";
      break;
    case "neutral":
      bgStyle = "bg-neutral-color";
      break;
    case "none":
      bgStyle = "bg-text-color";
      break;
    default:
      bgStyle = "bg-detail-color";
      break;
  }

  return (
    <button
      className={`px-6 py-2 rounded-sm text-white font-bold flex items-center w-3/5 justify-center h-10 ${bgStyle} ${style}`}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
