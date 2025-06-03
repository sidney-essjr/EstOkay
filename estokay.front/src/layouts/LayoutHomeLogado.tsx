import { ReactNode } from "react";

export default function LayoutHomeLogado({ children }: { children: ReactNode }) {
  return (
    <section className="sm:p-5 sm:w-[calc(100vw-64px)] sm:rounded-tl-lg sm:border-t-2 sm:border-logo-gray-color bg-white w-screen sm:left-16 sm:h-[calc(100vh-128px)] h-[calc(100vh-228px)] sm:top-0 overflow-auto p-2 absolute top-20">
      {children}
    </section>
  );
}
