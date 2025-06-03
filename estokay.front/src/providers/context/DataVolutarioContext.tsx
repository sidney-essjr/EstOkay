import { createContext, ReactNode, useState } from "react";
import { Voluntario } from "../../types/voluntario";

type DataVoluntarioContextProps = {
  dataVoluntario: Voluntario | null;
  setDataVoluntario: (data: Voluntario) => void;
} | null;

export const DataVoluntarioContext = createContext<DataVoluntarioContextProps>(null);

export default function DataVoluntarioContextProvider({ children }: { children: ReactNode }) {
  const [dataVoluntario, setDataVoluntario] = useState<Voluntario | null>(null);

  return (
    <DataVoluntarioContext.Provider value={{ dataVoluntario, setDataVoluntario }}>
      {children}
    </DataVoluntarioContext.Provider>
  );
}
