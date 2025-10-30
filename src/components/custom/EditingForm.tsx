import React, { useState } from "react";
import type { ExpenseItem } from "../../../reducer/expense";

import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useExpenseDispatch } from "../../hooks/useExpense";

type EditingFormProps = {
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
};
export default function EditingForm({ setEditingId }: EditingFormProps) {
  const dispatch = useExpenseDispatch();
  const [formInput, setFormInput] = useState<ExpenseItem>({
    id: Date.now(),
    title: "",
    category: "",
    amount: 1,
  });

  function showMessage(text: string) {
    dispatch({ type: "SET_MESSAGE", payload: text });
    setTimeout(() => {
      dispatch({ type: "SET_MESSAGE", payload: "" });
    }, 3000);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  }
  function handleEditing(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const hasEmpty = Object.values(formInput).some(
      (item) => typeof item == "string" && item.trim() == ""
    );
    if (hasEmpty) {
      showMessage("You can't add an empty item!");
      return;
    }
    dispatch({ type: "EDIT", payload: formInput });
    showMessage("updated succesfully");
    setFormInput({ id: Date.now(), category: "", title: "", amount: 0 });
    setEditingId(null);
  }

  return (
    <form
      onSubmit={handleEditing}
      className="flex flex-col justify-center items-center w-sm max-w-md space-y-3 shadow-lg p-2 rounded-lg text-primary border-2"
    >
      <p className="text-center font-bold text-2xl border-b mb-5 animate-pulse">
        Add Your Expenses
      </p>
      <Input
        className="rounded-md p-2"
        type="text"
        name="title"
        placeholder="Enter title of expenditure"
        value={formInput.title}
        onChange={handleChange}
      />

      <Select
        value={formInput.category}
        onValueChange={(value) =>
          setFormInput((prev) => ({ ...prev, category: value }))
        }
      >
        <SelectTrigger className="w-full bg-red-800">
          <SelectValue placeholder="Select The Expense Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Expense Category</SelectLabel>
            <SelectItem value="Rent">Rent</SelectItem>
            <SelectItem value="Shopping">Shopping</SelectItem>
            <SelectItem value="Food">Food</SelectItem>
            <SelectItem value="Fruits">Fruits</SelectItem>
            <SelectItem value="Others">Others</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Input
        className="rounded-md p-2"
        type="number"
        name="amount"
        placeholder="How much was it ?"
        value={Number(formInput.amount)}
        onChange={handleChange}
      />
      <Button type="submit" variant={"secondary"} className="text-input">
        Update
      </Button>
    </form>
  );
}
