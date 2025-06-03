import { ReactNode } from "react";

export default function ItemCadastro({ icon, desc }: Readonly<{ icon: ReactNode; desc: string }>) {
  return (
    <div className="rounded-sm shadow-lg hover:shadow-xl transition-shadow min-w-[230px] flex flex-row border-logo-gray-color justify-center items-center gap-8 p-4 md:flex-col">
      <div>{icon}</div>
      <h2 className="text-2xl text-logo-gray-color">{desc}</h2>
    </div>
  );
}
