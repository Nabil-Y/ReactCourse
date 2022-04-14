import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";

export default function Expenses(props) {
  const [filterDate, setFilterDate] = useState("2020");

  const filterHandler = (data) => {
    setFilterDate(data);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter onFilter={filterHandler} value={filterDate} />
      {props.data.map((expense) => ExpenseItem(expense))}
    </Card>
  );
}
