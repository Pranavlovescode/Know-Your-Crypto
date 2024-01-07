import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import coinDetail from "./coinDetail";
function Home() {
  const [crypto, setCrypto] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&precision=2"
      );
      const data = await response.json();
      setCrypto(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 5 minutes (adjust as needed)
    const intervalId = setInterval(fetchData, 5 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const styles = {
    width: '40px',
    height: '40px'
  };

  return (
    
    <>
      <div className="container-fluid">
        <div className="row">
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
          <div className="col-12 col-lg-7">
            {crypto.map((index) => (
              <ul key={index.id} className="list-group">
                <NavLink to={'/crypto-details'}
                  className={`list-group-item d-flex justify-content-between align-items-start text-white ${
                    index.market_cap_change_percentage_24h >= 0
                      ? "bg-success"
                      : "bg-danger"
                  }`}
                >
                  <div className="ms-2 me-auto">
                    <img src={index.image} alt={index.name} srcset="" style={styles} className="mx-2"/>
                    <div className="fw-bold">
                      {index.name} ({index.symbol})
                    </div>
                    {index.market_cap_change_percentage_24h} %
                  </div>
                  <span className="mt-2">&#x20b9; {index.current_price}</span>
                </NavLink>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
