import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function SidebarItem({
  isExpanded,
  icon,
  desc,
  path,
}: {
  isExpanded: boolean;
  icon: ReactNode;
  desc: string;
  path: string;
}) {
  return (
    <Link to={path}>
      <div className="flex p-3 space-x-3">
        <div>{icon}</div>
        <div
          className={`sm:block hidden content-center transition-opacity duration-300 ease-in-out ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          {desc}
        </div>
      </div>
    </Link>
  );
}
