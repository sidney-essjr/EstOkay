import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "../router/Route";
import DataVoluntarioContextProvider from "./context/DataVolutarioContext";

export default function AppProviders() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DataVoluntarioContextProvider>
        <RouterProvider router={router} />
      </DataVoluntarioContextProvider>
    </QueryClientProvider>
  );
}
