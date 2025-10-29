// import Dashboard from './components/custom/Dashboard'
// import Transactions from './components/custom/Transactions'
import { useExpenseState } from "./hooks/useExpense";
import ExpenseForm from "./components/custom/ExpenseForm";

export default function App() {
  const state = useExpenseState();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-foreground min-w-screen">
      <p className="text-center animate-bounce text-secondary">
        {state.message}
      </p>
      <ExpenseForm />
      {/* <Dashboard/>
      <Transactions/> */}
    </div>
  );
}
