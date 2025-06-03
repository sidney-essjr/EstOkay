import { useRef, useState } from "react";
import ConfigSVG from "../../assets/svg/ConfigSVG";
import ListItemsSVG from "../../assets/svg/ListItemsSVG";
import NewRegisterSVG from "../../assets/svg/NewRegisterSVG";
import ReportSVG from "../../assets/svg/ReportsSVG";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setIsExpanded(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsExpanded(false);
  };

  return (
    <div
      className={`absolute flex justify-center items-center sm:items-start sm:justify-start sm:h-[calc(100vh-128px)] h-16 top-4 sm:top-0 rounded-none sm:rounded-tr-lg bg-logo-gray-color z-30 text-white overflow-hidden transition-width duration-300 ease-in-out ${
        isExpanded ? "sm:w-52 w-screen" : "sm:w-16 w-screen"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex sm:flex-col">
        <SidebarItem
          icon={<NewRegisterSVG />}
          isExpanded={isExpanded}
          desc="Cadastro"
          path="/cadastro"
        />
        <SidebarItem
          icon={<ListItemsSVG />}
          isExpanded={isExpanded}
          desc="Estoque"
          path="/estoque"
        />
        <SidebarItem
          icon={<ReportSVG />}
          isExpanded={isExpanded}
          desc="Relatório"
          path="/relatorio"
        />
        <SidebarItem
          icon={<ConfigSVG />}
          isExpanded={isExpanded}
          desc="Configurações"
          path="/configuracoes"
        />
      </div>
    </div>
  );
}
