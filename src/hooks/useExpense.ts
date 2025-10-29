import { useContext } from "react";
import { ExpenseContext, ExpenseDispatch } from "../../context/ExpenseContext";

export function useExpenseState() {
  const context = useContext(ExpenseContext);
  if (context === undefined) {
    throw new Error("useExpenseState must be used within ExpenseProvider");
  }
  return context;
}
export function useExpenseDispatch() {
  const context = useContext(ExpenseDispatch);
  if (context === undefined) {
    throw new Error("useExpenseState must be used within ExpenseProvider");
  }
  return context;
}
