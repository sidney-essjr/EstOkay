import { memo, ReactNode } from "react";
import Button from "./Button";
import Title from "./Title";

const Modal = memo(
  ({
    children,
    title,
    openModal,
  }: {
    children: ReactNode;
    title: string;
    openModal: (open: boolean) => void;
  }) => {
    return (
      <section className="absolute w-screen sm:w-[calc(100vw-79px)] h-full left-0 top-0 flex justify-center ">
        <div className="absolute w-full h-full left-0 top-0 bg-black z-10 opacity-50"></div>
        <div className="bg-white flex flex-col opacity-100 w-[95%] space-y-2 zoomIn sm:w-5/6 z-20 absolute top-8 max-w-[700px] rounded-sm p-3">
          <div className="flex justify-between items-center">
            <Title className="flex-1">
              <h1>{title}</h1>
            </Title>
            <Button className="opacity-100 w-auto" type="button" onClick={() => openModal(false)}>
              Fechar
            </Button>
          </div>
          <div className="px-2 h-auto max-h-[calc(100vh-350px)] sm:h-auto sm:max-h-[calc(100vh-260px)] overflow-auto">
            {children}
          </div>
        </div>
      </section>
    );
  }
);

export default Modal;
