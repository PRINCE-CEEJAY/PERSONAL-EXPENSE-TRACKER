import { useState } from "react";
import { useExpenseDispatch, useExpenseState } from "../../hooks/useExpense";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import EditingForm from "../custom/EditingForm";

export default function ExpenseList() {
  const state = useExpenseState();
  const dispatch = useExpenseDispatch();
  const [editingId, setEditingId] = useState<number | null>(null);

  function startEdit(id: number) {
    setEditingId(id);
  }
  return (
    <div>
      <Card className="grid grid-cols-3 gap-2 p-2">
        {state.expense.map((item) => (
          <CardContent key={item.id}>
            {editingId === item.id ? (
              <EditingForm setEditingId={setEditingId} />
            ) : (
              <div className="flex flex-col justify-center items-center space-y-3 bg-red-800 gap-2 font-bold rounded-md p-2">
                <p className="text-2xl text-center border-b">
                  Title: {item.title}
                </p>
                <p className="text-xl text-center">{item.category}</p>
                <p>Amount: {item.amount}</p>
                <p>Item ID: {item.id}</p>

                <CardFooter className="w-56 flex justify-between">
                  <Button
                    variant={"outline"}
                    onClick={() => startEdit(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant={"destructive"}
                    onClick={() =>
                      dispatch({ type: "REMOVE", payload: item.id })
                    }
                  >
                    Delete
                  </Button>
                </CardFooter>
              </div>
            )}
          </CardContent>
        ))}
      </Card>
    </div>
  );
}
