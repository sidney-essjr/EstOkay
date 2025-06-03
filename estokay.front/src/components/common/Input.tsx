import { ComponentPropsWithRef, forwardRef, HTMLInputTypeAttribute, memo } from "react";

type InputProps = ComponentPropsWithRef<"input"> & {
  id: string;
  type?: HTMLInputTypeAttribute;
  label: string;
  error?: string;
  className?: string;
};

const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, type = "text", error, className = "", ...rest }: InputProps, ref) => {
      const style = className;
      return (
        <div className={`space-y-1 ${style}`}>
          <div className="flex justify-between">
            <label className="text-sm" htmlFor={id}>
              {label.toLocaleUpperCase()}
            </label>
            <span className="text-detail-color text-sm">{error}</span>
          </div>
          <input
            ref={ref}
            className="outline-detail-color h-12 w-full py-4 px-8 border-[1px] border-gray-400 rounded-sm text-sm"
            id={id}
            type={type}
            {...rest}
            aria-invalid={!!error}
            aria-describedby={error ?? ""}
          />
        </div>
      );
    }
  )
);

export default Input;
