import Card from "./Card";
import style from "./Output.module.css";

const Output = (props) => {
  const createList = () =>
    props.userList.map((user) => (
      <li className={style.li} key={Math.random()}>
        {" "}
        {`${user.name} (${user.age} years old)`}{" "}
      </li>
    ));

  return (
    <Card>
      <ul>{createList()}</ul>
    </Card>
  );
};

export default Output;
