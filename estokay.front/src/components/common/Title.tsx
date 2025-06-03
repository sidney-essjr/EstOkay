import { memo, ReactNode } from "react";

type TitleProps = {
  className?: string;
  children: ReactNode;
};

const Title = memo(({ children, className }: TitleProps) => {
  const style = className;
  return (
    <div className={`${style} py-2 px-4 text-xl text-logo-gray-color animeLeft`}>{children}</div>
  );
});

export default Title;
