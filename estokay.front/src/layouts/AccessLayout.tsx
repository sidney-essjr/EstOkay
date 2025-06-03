import { Outlet } from "react-router-dom";

export default function AccessLayout() {
  return (
    <section className="flex">
      <div className="bg-[url('https://estokay-unisenai.vercel.app/assets/imgLogin-gJd-50Nm.webp')] opacity-90 bg-no-repeat bg-cover h-[100vh] w-[55%] md:block hidden"></div>

      <Outlet/>

    </section>
  );
}
