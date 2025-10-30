import React, { useState } from "react";
import { useExpenseDispatch, useExpenseState } from "../../hooks/useExpense";
import { Button } from "../ui/button";

export default function ExpenseList() {
  const state = useExpenseState();
  const dispatch = useExpenseDispatch();
  const [currentEditingId, setCurrentEditingId] = useState<number | null>(null);

  function showMessage(text: string) {
    dispatch({ type: "SET_MESSAGE", payload: text });
    setTimeout(() => {
      dispatch({ type: "SET_MESSAGE", payload: "" });
    }, 3000);
  }

  function handleEditing(id: number) {
    setCurrentEditingId(id);
  }
  function handleDelete(id: number) {
    dispatch({ type: "REMOVE", payload: { id } });
    showMessage("deleted successfully");
  }
  return (
    <table className="w-md m-2">
      <thead>
        <tr>
          <th>ID</th>
          <th>CATEGORY</th>
          <th>TITLE</th>
          <th>AMOUNT</th>
          <th className="justify-center flex space-x-3 items-center">
            ACTIONS
          </th>
        </tr>
      </thead>
      <tbody>
        {state.expense.length > 0 &&
          !currentEditingId &&
          state.expense?.map((item) => (
            <tr key={item.id} className="text-center m-3">
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.title}</td>
              <td>{item.amount}</td>
              <td className="flex gap-2 items-center">
                <Button
                  variant={"destructive"}
                  onClick={() => handleEditing(item.id)}
                >
                  Edit
                </Button>
                <Button
                  variant={"destructive"}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
