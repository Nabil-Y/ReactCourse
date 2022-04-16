import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

export default function Expenses(props) {
  const [filterDate, setFilterDate] = useState("2021");

  const filterHandler = (data) => {
    setFilterDate(data);
  };

  let expenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterDate
  );

  return (
    <Card className="expenses">
      <ExpenseFilter onFilter={filterHandler} value={filterDate} />
      <ExpensesChart expenses={expenses} />
      <ExpensesList items={expenses} />
    </Card>
  );
}
