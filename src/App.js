import React from "react";
import "./globals.css";
import Header from "./header.js";
import TopCrdList from "./top-card-list";
import Overview from "./overview";

function App() {
  return (
    <>
      <Header>
        {/* <Switch /> */}
      </Header>
      <TopCrdList />
      <Overview />
    </>
  );
}

export default App;
