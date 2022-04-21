import style from "./Form.module.css";
import Button from "./Button";
import Card from "./Card";
import { useState } from "react";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = () => {
    props.onSubmitClick(userAge, userName);

    if (
      !userName ||
      userName.match(/\d/) ||
      !userAge ||
      parseInt(userAge) < 0 ||
      !parseInt(userAge)
    ) {
      return;
    }
    setUserAge("");
    setUserName("");
  };

  return (
    <Card className={style.form}>
      <form>
        <h2>Username</h2>
        <input
          className={style.input}
          type="text"
          value={userName}
          onChange={userNameChangeHandler}
        />
        <h2>Age(Years)</h2>
        <input
          className={style.input}
          type="text"
          value={userAge}
          onChange={userAgeChangeHandler}
        />
      </form>
      <Button action="Add User" onButtonClick={formSubmitHandler} />
    </Card>
  );
};

export default Form;
