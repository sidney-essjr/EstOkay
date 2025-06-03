import Title from "../components/common/Title";
import PerfilViewModel from "../components/configuracoes/perfil/perfil";

export default function PerfilPage() {
  return (
    <section className="max-w-[1000px] m-auto">
      <Title>
        <h1>Perfil</h1>
      </Title>
      <PerfilViewModel />
    </section>
  );
}
