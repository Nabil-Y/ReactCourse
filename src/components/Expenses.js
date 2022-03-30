import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {props.data.map((expense) => ExpenseItem(expense))}
    </Card>
  );
}
