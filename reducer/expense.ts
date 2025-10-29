export type ExpenseItem = {
    id: number,
    category: string,
    name: string,
    amount: number
}
export type State = {
    expense: ExpenseItem[]    
}
export const initialState = {
    expense: []
}
export type Action = 
|{type: "ADD", payload: ExpenseItem}
|{type: "REMOVE", payload: {id: number}}
|{type: "EDIT", payload: ExpenseItem}
|{type: "SORT", payload: ExpenseItem[]}
|{type: "CLEAR_ALL"}

export function expenseReducer(state: State, action: Action):State{
    switch(action.type){
        case "ADD":{
            const newExpense = {
                id: Date.now(),
                category: action.payload.category,
                name: action.payload.name,
                amount: action.payload.amount
            }
            return {
                ...state,
                expense: [...state.expense, newExpense]
            }
        }
        case "REMOVE":{
            return {
                ...state,
                expense: state.expense.filter(item=>item.id !== action.payload.id)
            }
        }
        case "EDIT":{
            return {
                ...state,
                expense: state.expense.map(item=> item.id === action.payload.id ? {...item, category: action.payload.category, name: action.payload.name, amount: action.payload.amount}: item)
            }
        }
        case "SORT":{
            return {
                ...state,
                expense: state.expense.sort()
            }
        }
        case "CLEAR_ALL":
            return state;
    }
}