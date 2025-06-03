import { createBrowserRouter } from "react-router-dom";
import { Funcao } from "../common/enums/enumFuncao";
import AccessLayout from "../layouts/AccessLayout";
import LayoutHomeLogado from "../layouts/LayoutHomeLogado";
import RootLayout from "../layouts/RootLayout";
import AcessoNaoAutorizadoPage from "../pages/AcessoNaoAutorizadoPage";
import CadastroDistribuicaoPage from "../pages/CadastroDistribuicaoPage";
import CadastroDoacaoPage from "../pages/CadastroDoacaoPage";
import CadastroPage from "../pages/CadastroPage";
import CadastroVoluntarioPage from "../pages/CadastroVoluntarioPage";
import ConfiguracoesPage from "../pages/ConfiguracoesPage";
import EsqueceuSenhaPage from "../pages/EsqueceuSenhaPage";
import EstoquePage from "../pages/EstoquePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PerfilPage from "../pages/PerfilPage";
import RedefinirSenhaPage from "../pages/RedefinirSenhaPage";
import RelatorioEntradasPage from "../pages/RelatorioEntradasPage";
import RelatoriosGraficosPage from "../pages/RelatorioGraficosPage";
import RelatorioSaidasPage from "../pages/RelatorioSaidasPage";
import RelatoriosPage from "../pages/RelatoriosPage";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: "",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "cadastro",
        element: (
          <ProtectedRoute funcaoRequerida={Funcao.USUARIO}>
            <LayoutHomeLogado>
              <CadastroPage />
            </LayoutHomeLogado>
          </ProtectedRoute>
        ),
      },
      {
        path: "cadastro/doacao",
        element: (
          <ProtectedRoute funcaoRequerida={Funcao.USUARIO}>
            <LayoutHomeLogado>
              <CadastroDoacaoPage />
            </LayoutHomeLogado>
          </ProtectedRoute>
        ),
      },
      {
        path: "cadastro/voluntario",
        element: (
          <ProtectedRoute>
            <LayoutHomeLogado>
              <CadastroVoluntarioPage />
            </LayoutHomeLogado>
          </ProtectedRoute>
        ),
      },
      {
        path: "cadastro/distribuicao",
        element: (
          <ProtectedRoute>
            <LayoutHomeLogado>
              <CadastroDistribuicaoPage />
            </LayoutHomeLogado>
          </ProtectedRoute>
        ),
      },
      {
        path: "/estoque",
        element: (
          <ProtectedRoute funcaoRequerida={Funcao.USUARIO}>
            <LayoutHomeLogado>
              <EstoquePage />
            </LayoutHomeLogado>
          </ProtectedRoute>
        ),
      },
      {
        path: "/relatorio",
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <LayoutHomeLogado>
                  <RelatoriosPage />
                </LayoutHomeLogado>
              </ProtectedRoute>
            ),
          },
          {
            path: "entradas",
            element: (
              <ProtectedRoute>
                <LayoutHomeLogado>
                  <RelatorioEntradasPage />
                </LayoutHomeLogado>
              </ProtectedRoute>
            ),
          },
          {
            path: "saidas",
            element: (
              <ProtectedRoute>
                <LayoutHomeLogado>
                  <RelatorioSaidasPage />
                </LayoutHomeLogado>
              </ProtectedRoute>
            ),
          },
          {
            path: "graficos",
            element: (
              <ProtectedRoute>
                <LayoutHomeLogado>
                  <RelatoriosGraficosPage />
                </LayoutHomeLogado>
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/configuracoes",
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute funcaoRequerida={Funcao.USUARIO}>
                <LayoutHomeLogado>
                  <ConfiguracoesPage />
                </LayoutHomeLogado>
              </ProtectedRoute>
            ),
          },
          {
            path: "perfil",
            element: (
              <ProtectedRoute funcaoRequerida={Funcao.USUARIO}>
                <LayoutHomeLogado>
                  <PerfilPage />
                </LayoutHomeLogado>
              </ProtectedRoute>
            ),
          },
          {
            path: "gerenciamento",
          },
        ],
      },
    ],
  },
  {
    path: "/access",
    element: <AccessLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "esqueceu-senha",
        element: <EsqueceuSenhaPage />,
      },
      {
        path: "redefinir-senha",
        element: <RedefinirSenhaPage />,
      },
    ],
  },
  {
    path: "/nao-autorizado",
    element: <AcessoNaoAutorizadoPage />,
  },
]);

export default router;
