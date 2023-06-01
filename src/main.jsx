import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AuthProviders from "./AuthProviders/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProviders><App /></AuthProviders>
    </StrictMode>
  </BrowserRouter>
);
