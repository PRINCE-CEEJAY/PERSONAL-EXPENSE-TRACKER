import { createContext } from "react";
import type { State, Action } from "../reducer/expense";

export const ExpenseContext = createContext<State | undefined>(undefined);
export const ExpenseDispatch = createContext<
  React.Dispatch<Action> | undefined
>(undefined);
