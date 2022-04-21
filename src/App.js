import Form from "./components/UI/Form";
import Modal from "./components/UI/Modal";
import Output from "./components/UI/Output";
import { useState } from "react";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalText, setModalText] = useState("Dummy Text");
  const [userList, setUserList] = useState([]);

  const modalHandler = () => {
    setIsModal(!isModal);
  };

  const submitHandler = (userAge, userName) => {
    if (!userAge && !userName) {
      setModalText("Please enter a valid name and age (non-empty values)");
      setIsModal(!isModal);
    } else if (!userName || userName.match(/\d/)) {
      setModalText("Please enter a name");
      setIsModal(!isModal);
    } else if (!userAge || parseInt(userAge) < 0 || !parseInt(userAge)) {
      setModalText("Please enter a valid number (higher than 0)");
      setIsModal(!isModal);
    } else if (userAge && userName) {
      setUserList((prevState) => [
        ...prevState,
        { name: userName, age: userAge },
      ]);
    }
  };

  return (
    <div>
      <Form onSubmitClick={submitHandler} />
      <Modal
        modalText={modalText}
        modalHandler={modalHandler}
        isModal={isModal}
      />
      <Output userList={userList} />
    </div>
  );
};

export default App;
