import { useExpenseState } from './hooks/useExpense';
import ExpenseForm from './components/custom/ExpenseForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/custom/Dashboard';
import Transactions from './components/custom/Transactions';
import Chart from './components/custom/Chart';
import ExpenseList from './components/custom/ExpenseList';
import TypeWrite from './components/custom/TypeWrite';

export default function App() {
  const state = useExpenseState();
  console.log(state.total);
  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-primary min-w-screen'>
      <p className='text-center animate-bounce '>{state.message}</p>
      <ExpenseList />
      <Router>
        <Routes>
          <Route
            path='/'
            element={<ExpenseForm />}
          />
          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route
            path='/advice'
            element={<TypeWrite />}
          />
          <Route
            path='/transactions'
            element={<Transactions />}
          />
          <Route
            path='/chart'
            element={<Chart />}
          />
        </Routes>
      </Router>
    </div>
  );
}
