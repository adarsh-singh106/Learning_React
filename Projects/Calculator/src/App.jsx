import React, { useState } from "react";
import Display from "./components/Display";
import AppName from "./components/AppName";
import Buttons from "./components/Buttons";
import styles from "./App.module.css";

const App = () => {
  const [value, setValue] = useState("0");

  const handleButtonClick = (btn) => {
    if (btn === "AC") {
      setValue("0");
    } else if (btn === "DEL") {
      setValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (btn === "+/−") {
      setValue((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
    } else if (btn === "=") {
      try {
        // Replace symbols with JS operators
        const expression = value
          .replace(/÷/g, "/")
          .replace(/×/g, "*")
          .replace(/−/g, "-");
        setValue(eval(expression).toString()); // quick eval (ok for demo)
      } catch {
        setValue("Error");
      }
    } else {
      setValue((prev) => (prev === "0" ? btn : prev + btn));
    }
  };

  return (<><AppName App_Name={"Measure Your Aura"} />
  <div className={styles["main-container"]}>
      <Display value={value} />
      <Buttons onButtonClick={handleButtonClick} />
    </div></>
    
  );
};

export default App;
