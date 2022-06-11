import { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const clickHandler = () => setShowParagraph((prevState) => !prevState);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <DemoOutput show={showParagraph} />}
      <Button onClick={clickHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
