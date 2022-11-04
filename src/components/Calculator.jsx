import React, { useState } from "react";
import Buttons from "./Buttons";
import "../App.css";
const Calculator = () => {
  const [display, setDisplay] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    operation: "",
    values: "",
  });

  const numberHandler = (value) => {
    let newValue = value;
    if (!display.isInitial) {
      newValue = display.current + value;
    }
    setDisplay({
      current: newValue,
      total: display.total,
      isInitial: false,
      operation: display.operation,
      values: display.values + value,
    });
  };

  const operatorHandler = (value) => {
    const total = calculation();
    setDisplay({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      operation: value,
      values: display.values + value,
    });
  };

  const calculation = () => {
    let total = parseFloat(display.total);
    switch (display.operation) {
      case "+":
        total += parseFloat(display.current);
        break;
      case "-":
        total -= parseFloat(display.current);
        break;
      case "*":
        total *= parseFloat(display.current);
        break;
      case "/":
        total /= parseFloat(display.current);
        break;
      case "%":
        total *= parseFloat(display.current) / 100;
        break;
      default:
        total = parseFloat(display.current);
        break;
    }
    return total;
  };

  const clearHandler = () => {
    setDisplay({
      current: "0",
      total: "0",
      isInitial: true,
      operation: "",
      values: "",
    });
  };

  const style = {
    color: "white",
    backgroundColor: "black"
  }
  return (
    <div className="Calculator">
      <div className="inputarea">
        <textarea rows="3" className="sec-output" disabled value={display.values} />
        <textarea className="main-output" rows="1" disabled value={display.current} />
      </div>

      <Buttons value="7" onClick={numberHandler} />
      <Buttons value="8" onClick={numberHandler} />
      <Buttons value="9" onClick={numberHandler} />
      <Buttons value="/" style={style} onClick={operatorHandler} />

      <Buttons value="4" onClick={numberHandler} />
      <Buttons value="5" onClick={numberHandler} />
      <Buttons value="6" onClick={numberHandler} />
      <Buttons value="*" style={style} onClick={operatorHandler} />

      <Buttons value="1" onClick={numberHandler} />
      <Buttons value="2" onClick={numberHandler} />
      <Buttons value="3" onClick={numberHandler} />
      <Buttons value="-" style={style} onClick={operatorHandler} />

      <Buttons value="00" onClick={numberHandler} />
      <Buttons value="0" onClick={numberHandler} />
      <Buttons value="." onClick={numberHandler} />
      <Buttons value="+"  style={style} onClick={operatorHandler} />
      <Buttons value="=" style={{gridColumn: "1/3"}} onClick={operatorHandler} />
      <Buttons value="C" onClick={clearHandler} />
      <Buttons value="%" style={style} onClick={operatorHandler} />
    </div>
  );
};

export default Calculator;
