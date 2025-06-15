import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import LogoutSVG from "../assets/svg/LogoutSVG";
import PadlockSVG from "../assets/svg/PadlockSVG";
import { sessionLogin } from "../common/utils/sessionLogin";
import { sessionLogout } from "../common/utils/sessionLogout";
import Sidebar from "../components/sidebar/SidebarContainer";
import { useDataVoluntario } from "../hooks/useDataVoluntario";

export default function RootLayout() {
  const [acesso, setAcesso] = useState({ logado: false, nome: "acessar" });
  const [atHome, setAtHome] = useState(true);
  const dataVoluntario = useDataVoluntario();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setAtHome(location.pathname === "/");

    async function handleSessionLogin() {
      const response = await sessionLogin();
      const result = response?.result;
      if (result && typeof result === "object") {
        dataVoluntario?.setDataVoluntario(result);
        setAcesso({ logado: true, nome: result.nome.split(" ")[0] });
      } else {
        setAcesso({ logado: false, nome: "acessar" });
      }
    }
    handleSessionLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  async function handleSessionLogout() {
    const response = await sessionLogout();
    if (response) {
      setAcesso({ logado: false, nome: "acessar" });
      navigate("/");
    }
  }

  return (
    <>
      <header className="w-full min-h-32 flex flex-col m-auto items-center sm:flex-row">
        <div className="flex-1">
          <Link to={acesso.logado ? "/cadastro" : "/"}>
            <img
              src="https://estokay-unisenai.vercel.app/logo.png"
              alt="Logo com a escrita EstOkay em cinza e vermelho"
            />
          </Link>
        </div>
        <div className="flex md:pr-32 sm:pr-4 items-center space-x-3 text-gray-500">
          <p>Ambiente seguro</p>
          <PadlockSVG />
          <Link to={acesso.logado ? "/cadastro" : "/access/login"}>{acesso.nome}</Link>
          {!atHome && (
            <button onClick={handleSessionLogout}>
              <LogoutSVG />
            </button>
          )}
        </div>
      </header>
      <section className={`${!atHome ? "sm:h-[calc(100vh-128px)] relative bg-logo-gray-color" : "block"}`}>
        {!atHome && <Sidebar />}
        <Outlet />
      </section>
    </>
  );
}
