import "./index.css";
import React, { useState } from "react";
import DarkMode from "./DarkMode";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
      <DarkMode onToggle={onToggle} toggle={toggle} />
    </ThemeProvider>
  );
}

export default App;
