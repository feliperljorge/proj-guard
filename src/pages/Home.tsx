/** @jsxImportSource @emotion/react */

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feed from "../components/Feed";
import Accounts from "../components/Accounts";
import SecurityAlerts from "../components/SecurityAlerts";
import Transactions from "../components/Transactions";

import { ReactComponent as BGNegative } from "../assets/fingerprint-negative.svg";

function Home(): React.JSX.Element {
  const handleMenuToggle = () => {
    console.log("Menu toggle clicked");
  };

  return (
    <>
      <BGNegative
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      />
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
