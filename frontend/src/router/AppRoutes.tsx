import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import StartPage from "../pages/StartPage";
import PatientDetailsPage from "../pages/PatientDetailsPage";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Rota pública */}
        <Route path="/" element={<StartPage />} />

        {/* Rotas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/patient/:id" element={<PatientDetailsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
