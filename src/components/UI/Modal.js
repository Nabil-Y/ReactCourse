import Card from "./Card";
import Button from "./Button";
import style from "./Modal.module.css";
import { useState } from "react";

const Modal = (props) => {
  const [isModal, setIsModal] = useState(true);

  const clickHandler = () => {
    setIsModal(!isModal);
  };

  if (!isModal) {
    return;
  }

  return (
    <div className={style.modalBackground}>
      <Card className={style.modal}>
        <h2 className={style.modalTitle}>Invalid Input</h2>
        <div className={style.modalContent}>
          <p className={style.modalText}>{props.modalText}</p>
          <Button
            className={style.modalButton}
            action="Okay"
            onButtonClick={clickHandler}
          />
        </div>
      </Card>
    </div>
  );
};

export default Modal;
