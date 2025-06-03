export default function HomeBody() {
  return (
    <section className="w-full sm:h-[calc(100vh-240px)] h-[calc(100vh-260px)] sm:min-h-[450px] relative">
      <div className="sm:absolute sm:top-32 sm:left-20 sm:block flex flex-col m-auto pt-20 sm:p-0 text-center xl:w-[685px] lg:w-[510px] md:w-[430px] sm:w-[430px] w-[340px] text-gray-500">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-left mb-4">
          Sistema de controle de estoque descomplicado e prático
        </h1>
        <h2 className="text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-left sm:text-center ">
          <strong>Simplifique</strong> o controle de estoque online e
          <strong> impulsione a eficiência</strong> com a
          <strong>{" "}Est
            <span className="text-detail-color">Okay</span>
          </strong>
          .
        </h2>
      </div>
    </section>
  );
}
