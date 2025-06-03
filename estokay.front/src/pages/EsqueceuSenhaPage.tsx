import FormEsqueceuSenha from "../components/access/esqueceu-senha/FormEsqueceuSenha";

export default function EsqueceuSenhaPage() {
  return (
    <div className="h-[100vh] w-full md:w-[45%] flex flex-col justify-center items-center space-y-6">
      <img
        src="https://estokay-unisenai.vercel.app/logo.png"
        alt="Logo com a escrita EstOkay em cinza e vermelho"
      />
      <div className=" w-[80%] max-w-[400px] space-y-6">
        <p className="text-sm">
          Adicione seu e-mail cadastrado para receber mais informações sobre a recuperação de senha.
        </p>
        <FormEsqueceuSenha />
      </div>
    </div>
  );
}
