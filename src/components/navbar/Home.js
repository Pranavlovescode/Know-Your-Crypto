import React, { useEffect, useState } from "react";
// import coinDetail from "./coinDetail";
function Home() {
  const [crypto, setCrypto] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en&precision=2"
      );
      const data = await response.json();
      setCrypto(data)
      console.log(data);      
    }
    fetchData()
  }, []);

  return (
    <>
      <div className="row cointainer-fluid">
        <div className="col-12 col-lg-5 ">
          <div className="cointainer-fluid">
            <h2>Bitcoin</h2>
            <p>
              Bitcoin is the first decentralized cryptocurrency. Nodes in the
              peer-to-peer bitcoin network verify transactions through
              cryptography and record them in a public distributed ledger,
              called a blockchain, without central oversight.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-7">{crypto.map((index) => (
        <ul key={index.id} className="list-group">
          <li
            className={`list-group-item d-flex justify-content-between align-items-start text-white ${
              index.market_cap_change_percentage_24h >= 0 ? "bg-success" : "bg-danger"
            }`}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                {index.name} ({index.symbol})
              </div>
              {index.market_cap_change_percentage_24h} %
            </div>
            <span className="mt-2">&#x20b9; {index.current_price}</span>
          </li>
        </ul>
      ))}</div>
      </div>
    </>
  );
}

export default Home;
