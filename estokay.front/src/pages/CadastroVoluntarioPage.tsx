import Title from "../components/common/Title";
import FormVoluntario from "../components/register/FormVoluntario";

export default function CadastroVoluntarioPage() {
  return (
    <section className="max-w-[1000px] m-auto">
      <Title>
        <h1>Cadastro de Voluntário</h1>
      </Title>
      <FormVoluntario />
    </section>
  );
}
