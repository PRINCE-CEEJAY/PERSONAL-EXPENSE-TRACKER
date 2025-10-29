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

export default function ExpenseForm() {
  const dispatch = useExpenseDispatch();
  const [formInput, setFormInput] = useState<ExpenseItem>({
    id: Date.now(),
    title: "",
    category: "",
    amount: null,
  });
  const [category, setCategory] = useState("");

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
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const hasEmpty = Object.values(formInput).some(
      (item) => typeof item == "string" && item.trim() == ""
    );
    if (hasEmpty) {
      showMessage("You can't add an empty item!");
      return;
    }
    showMessage("Added succesfully");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-sm max-w-md space-y-3 shadow-lg p-2 rounded-lg text-input border-2 border-background"
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

      <Select value={category} onValueChange={(value) => setCategory(value)}>
        <SelectTrigger className="w-full">
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
        Add
      </Button>
    </form>
  );
}
