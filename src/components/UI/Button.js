import style from "./Button.module.css";

const Button = (props) => {
  const classes = `${style.button} ${props.className}`;
  return (
    <button className={classes} onClick={props.onButtonClick}>
      {props.action}
    </button>
  );
};

export default Button;
