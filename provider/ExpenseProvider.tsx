import { useReducer } from "react";
import { initialState, expenseReducer } from "../reducer/expense";
import { ExpenseContext, ExpenseDispatch } from "../context/ExpenseContext";

type ProviderProps = {
  children: React.ReactNode;
};

export default function ExpenseProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={state}>
      <ExpenseDispatch.Provider value={dispatch}>
        {children}
      </ExpenseDispatch.Provider>
    </ExpenseContext.Provider>
  );
}
