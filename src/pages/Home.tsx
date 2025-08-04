import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feed from "../components/Feed";
import Accounts from "../components/Accounts";
import SecurityAlerts from "../components/SecurityAlerts";
import Transactions from "../components/Transactions";

function Home(): React.JSX.Element {
  const handleMenuToggle = () => {
    console.log("Menu toggle clicked");
  };

  return (
    <>
      <Header onMenuToggle={handleMenuToggle} />
      <Hero />
      <Feed>
        <Accounts />
        <SecurityAlerts />
        <Transactions />
      </Feed>
    </>
  );
}

export default Home;
