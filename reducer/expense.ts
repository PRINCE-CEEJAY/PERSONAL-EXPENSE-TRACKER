export type ExpenseItem = {
  id: number;
  title: string;
  category: string;
  amount: number | null;
};
export type State = {
  expense: ExpenseItem[];
  sortedAscending: ExpenseItem[];
  message: string;
};
export const initialState = {
  expense: [],
  sortedAscending: [],
  message: "",
};
export type Action =
  | { type: "ADD"; payload: ExpenseItem }
  | { type: "REMOVE"; payload: { id: number } }
  | { type: "EDIT"; payload: ExpenseItem }
  | { type: "SORT"; payload: ExpenseItem[] }
  | { type: "SET_MESSAGE"; payload: string }
  | { type: "CLEAR_ALL" };

export function expenseReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        expense: [...state.expense, action.payload],
      };
    }
    case "REMOVE": {
      return {
        ...state,
        expense: state.expense.filter((item) => item.id !== action.payload.id),
      };
    }
    case "EDIT": {
      return {
        ...state,
        expense: state.expense.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                title: action.payload.title,
                category: action.payload.category,
                amount: action.payload.amount,
              }
            : item
        ),
      };
    }
    case "SORT": {
      return {
        ...state,
        sortedAscending: state.expense.sort(),
      };
    }
    case "SET_MESSAGE": {
      return {
        ...state,
        message: action.payload,
      };
    }
    case "CLEAR_ALL":
      return initialState;
    default:
      return state;
  }
}
