import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.tsx";
import { PatientProvider } from "./context/PatientProvider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PatientProvider>
        <App />
      </PatientProvider>
    </BrowserRouter>
  </StrictMode>
);
