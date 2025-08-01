import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";

import Feed from "./components/Feed";
import Accounts from "./components/Accounts";
import SecurityAlerts from "./components/SecurityAlerts";
import Transactions from "./components/Transactions";

function App(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  const handleMenuToggle = () => {
    console.log("Menu toggle clicked");
    // Add your mobile menu logic here
  };

  return (
    <>
      <div>
        <Header onMenuToggle={handleMenuToggle} />
        <Hero />
      </div>
      <Feed>
        <Accounts />
        <SecurityAlerts />
        <Transactions />
      </Feed>
    </>
  );
}

export default App;
