import { ReactNode } from "react";

export default function HomeFooterInfo({ svg, info }: Readonly<{ svg: ReactNode; info: string }>) {
  return (
    <div className="flex flex-col space-y-1 px-2 min-h-16 justify-center">
      <div>{svg}</div>
      <p>{info}</p>
    </div>
  );
}
