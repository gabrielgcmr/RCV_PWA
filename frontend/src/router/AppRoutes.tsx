import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import StartPage from "../pages/StartPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Rota pública */}
        <Route path="/" element={<StartPage />} />

        {/* Rotas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/patients" element={<PatientsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
