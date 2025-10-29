import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ExpenseProvider from "../provider/ExpenseProvider.tsx";
import Navbar from "./components/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExpenseProvider>
      <Navbar />
      <App />
    </ExpenseProvider>
  </StrictMode>
);
