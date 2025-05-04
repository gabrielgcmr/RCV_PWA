import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import MFCView from "../pages/interfaces/MFCView";
import PatientDetailsPage from "../pages/PatientDetailsPage";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Rota pública */}
        <Route path="/medico/mfc" element={<MFCView />} />

        {/* Rotas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/patient/:id" element={<PatientDetailsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
