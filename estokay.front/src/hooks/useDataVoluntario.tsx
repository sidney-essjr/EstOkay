import { useContext } from "react";
import { DataVoluntarioContext } from "../providers/context/DataVolutarioContext";

export function useDataVoluntario() {
  const context = useContext(DataVoluntarioContext);
  return context;
}
