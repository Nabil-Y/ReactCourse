import Card from "./Card";
import Button from "./Button";
import style from "./Modal.module.css";

const Modal = (props) => {
  if (props.isModal) {
    return (
      <div className={style.modalBackground}>
        <Card className={style.modal}>
          <h2 className={style.modalTitle}>Invalid Input</h2>
          <div className={style.modalContent}>
            <p className={style.modalText}>{props.modalText}</p>
            <Button
              className={style.modalButton}
              action="Okay"
              onButtonClick={props.modalHandler}
            />
          </div>
        </Card>
      </div>
    );
  }

  return;
};

export default Modal;
