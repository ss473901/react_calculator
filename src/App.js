import React from "react";
import Button from "./components/Button";
import Result from "./components/Result";
import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <div className="result">
        <Result result={"計算結果"} />
      </div>
      <div className="button-wrapper">
        <div className="number">
          <div className="upper">
            <Button text={"7"} />
            <Button text={"8"} />
            <Button text={"9"} />
          </div>
          <div className="upper">
            <Button text={"4"} />
            <Button text={"5"} />
            <Button text={"6"} />
          </div>
          <div className="upper">
            <Button text={"1"} />
            <Button text={"2"} />
            <Button text={"3"} />
          </div>
          <div className="upper">
            <Button text={"0"} />
            <Button text={"AC"} />
            <Button text={"="} />
          </div>
        </div>
        <div className="operator">
          <Button text={"÷"} />
          <Button text={"×"} />
          <Button text={"-"} />
          <Button text={"+"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
