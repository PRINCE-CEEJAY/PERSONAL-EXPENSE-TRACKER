// import Dashboard from './components/custom/Dashboard'
// import Transactions from './components/custom/Transactions'
import { useExpenseState } from "./hooks/useExpense";
import ExpenseForm from "./components/custom/ExpenseForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/custom/Dashboard";
import Transactions from "./components/custom/Transactions";
import Chart from "./components/custom/Chart";

export default function App() {
  const state = useExpenseState();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-foreground min-w-screen">
      <p className="text-center animate-bounce text-secondary">
        {state.message}
      </p>
      <Router>
        <Routes>
          <Route path="/" element={<ExpenseForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </Router>
    </div>
  );
}
