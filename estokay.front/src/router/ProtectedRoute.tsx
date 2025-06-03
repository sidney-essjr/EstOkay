import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Funcao } from "../common/enums/enumFuncao";
import { sessionLogin } from "../common/utils/sessionLogin";

export default function ProtectedRoute({
  children,
  funcaoRequerida = Funcao.ADMIN,
}: {
  children: ReactNode;
  funcaoRequerida?: Funcao;
}) {
  const navigate = useNavigate();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    async function handleSessionLogin() {
      const response = await sessionLogin();
      const result = response?.result;

      if (!result || typeof result !== "object") {
        navigate("/nao-autorizado");
        return;
      }

      if (result.funcao < funcaoRequerida.valueOf()) {
        navigate("/nao-autorizado");
        return;
      }
    }
    handleSessionLogin();

    setAllowed(true);
  }, [funcaoRequerida, navigate]);

  if (allowed) return children;
}
