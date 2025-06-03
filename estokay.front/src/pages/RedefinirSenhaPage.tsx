import FormRedefinirSenha from "../components/access/redefinir-senha/FormRedefinirSenha";

export default function RedefinirSenhaPage() {
  return (
    <div className="h-[100vh] w-full md:w-[45%] flex flex-col justify-center items-center space-y-6">
      <img
        src="https://estokay-unisenai.vercel.app/logo.png"
        alt="Logo com a escrita EstOkay em cinza e vermelho"
      />
      <div className=" w-[80%] max-w-[400px] space-y-6">
        <p className="text-sm">Preencha os campos com sua nova senha.</p>
        <FormRedefinirSenha />
      </div>
    </div>
  );
}
