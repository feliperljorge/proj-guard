export interface Connection {
  id: string;
  name: string;
  logo: string;
  mainColor: string;
}

export const connections: Connection[] = [
  {
    id: "1",
    name: "Venmo",
    logo: "https://www.svgrepo.com/show/349551/venmo.svg",
    mainColor: "#008CFF",
  },

  {
    id: "3",
    name: "Robinhood",
    logo: "https://www.svgrepo.com/show/331562/robinhood.svg",
    mainColor: "#00C805",
  },
  {
    id: "4",
    name: "PayPal",
    logo: "https://www.svgrepo.com/show/349473/paypal.svg",
    mainColor: "#003087",
  },
  {
    id: "5",
    name: "Cash App",
    logo: "https://www.svgrepo.com/show/349514/square-cash.svg",
    mainColor: "#00D632",
  },
  {
    id: "6",
    name: "Coinbase",
    logo: "https://www.svgrepo.com/show/331345/coinbase-v2.svg",
    mainColor: "#0052FF",
  },
  {
    id: "7",
    name: "Stripe",
    logo: "https://www.svgrepo.com/show/331592/stripe-v2.svg",
    mainColor: "#6772E5",
  },
];
