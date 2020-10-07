import React, { useState, useEffect } from "react";
import "./globals.css";
import Header from "./header.js";
import TopCrdList from "./top-card-list";
import Overview from "./overview";
import Switch from "./switch.js";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);

  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setChecked(mq.matches);
    setDarkMode(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkMode={setDarkMode}
          checked={checked}
          setChecked={setChecked}
        />
      </Header>
      <TopCrdList />
      <Overview />
    </main>
  );
}

export default App;
