import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main/main";
import { Home } from "./pages/home";
import { Contatos } from "./pages/contatos";
import { Localizacao } from "./pages/localizacao";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/contatos" element={<MainLayout><Contatos /></MainLayout>} />
      <Route path="/localizacao" element={<MainLayout><Localizacao /></MainLayout>} />
    </Routes>
  );
}
