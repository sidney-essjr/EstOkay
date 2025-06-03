import usePerfilModel from "./perfil.model";
import PerfilView from "./perfil.view";
import { AtualizarDadosBasicosVoluntario } from "./service/atualizarDadosBasicosVoluntario";

export default function PerfilViewModel() {
  const service = new AtualizarDadosBasicosVoluntario();
  const methods = usePerfilModel({ service });
  return <PerfilView {...methods} />;
}
