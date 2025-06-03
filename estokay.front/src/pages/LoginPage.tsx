import FormLogin from "../components/access/login/FormLogin";

export default function LoginPage() {
  return (
    <div className="h-[100vh] w-full md:w-[45%] flex flex-col justify-center items-center space-y-6">
      <img
        src="https://estokay-unisenai.vercel.app/logo.png"
        alt="Logo com a escrita EstOkay em cinza e vermelho"
      />
      <div className=" w-[80%] max-w-[400px]">
        <FormLogin />
      </div>
    </div>
  );
}
