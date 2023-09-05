import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main/main";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <p>Inicio</p>
          </MainLayout>
        }
      />
    </Routes>
  );
}
