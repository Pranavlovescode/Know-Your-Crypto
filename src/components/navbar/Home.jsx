import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../db/firebase";
import './home.css'

// import LoginSuccess from "./LoginSuccess";

const auth = getAuth(app);

// import coinDetail from "./coinDetail";
function Home() {
  const navigate = useNavigate();
  const [crypto, setCrypto] = useState([]);
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is login
        setIsLogin(user);
      } else {
        //user is logged out
        setIsLogin(null);
      }
    });
  }, []);

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
    width: "40px",
    height: "40px",
  };
  if (isLogin === null) {
    return "";
  }
  return (
    <>
      <div className="home">
        <h1 className="py-4">Hello {isLogin.displayName}</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-5 ">
              <div className="cointainer-fluid">
                <h2>Bitcoin</h2>
                <p>
                  Bitcoin is the first decentralized cryptocurrency. Nodes in
                  the peer-to-peer bitcoin network verify transactions through
                  cryptography and record them in a public distributed ledger,
                  called a blockchain, without central oversight.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              {crypto.map((index) => (
                <ul key={index.id} className="list-group">
                  <li
                    onClick={()=>navigate(`/crypto-details/${index.name}/${index.current_price}`)}
                    className={`list-group-item d-flex justify-content-between align-items-start text-white ${
                      index.market_cap_change_percentage_24h >= 0
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    <div className="ms-2 me-auto">
                      <img
                        src={index.image}
                        alt={index.name}
                        srcset=""
                        style={styles}
                        className="mx-2"
                      />
                      <div className="fw-bold">
                        {index.name} ({index.symbol})
                      </div>
                      {index.market_cap_change_percentage_24h} %
                    </div>
                    <span className="mt-2">&#x20b9; {index.current_price}</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
