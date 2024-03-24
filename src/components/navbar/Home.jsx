import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../db/firebase";
import "./home.css";

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
      const response = await fetch("https://api.livecoinwatch.com/coins/list", {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
          "x-api-key": "36735d2c-0f11-4f46-bf1f-c881d551e21b",
        }),
        body: JSON.stringify({
          currency: "INR",
          sort: "rank",
          order: "ascending",
          offset: 0,
          limit: 10,
          meta: true,
        }),
      });
      const data = await response.json();
      setCrypto(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const loadScript=()=> {
    const script = document.createElement("script");
    script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
    script.async = true;
    // Append script to the body
    document.body.appendChild(script);
    console.log("Script Loaded");
    
  }
  useEffect(() => {
    // Fetch data initially
    fetchData();
    loadScript();
    // Set up interval to fetch data every 5 minutes (adjust as needed)
    const intervalId = setInterval(fetchData, 5 * 60 * 1000);

   
    return () => {
      // Remove script from the body on component unmount
      // document.body.removeChild(script);
      // Cleanup interval on component unmount
      
      clearInterval(intervalId);
    };
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
                    onClick={() =>
                      navigate(
                        `/crypto-details/${index.name}/${index.rate}/${index.delta.hour}/${index.code}/${index.high_24h}/${index.low_24h}/${index.cap}/${index.volume}/${index.maxSupply}/${index.totalSupply}/${index.id}`
                      )
                    }
                    className={`list-group-item d-flex justify-content-between align-items-start text-white ${
                      index.delta.hour >= 0 ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {/* <div className="ms-2 me-auto">
                      <img
                        src={index.png64}
                        alt={index.name}
                        srcset=""
                        style={styles}
                        className="mx-2"
                      />
                      <div className="fw-bold">
                        {index.name} ({index.code})
                      </div>
                      {index.delta.hour} %
                    </div>
                    <span className="mt-2">&#x20b9; {index.rate}</span> */}
                    <div
                      class="livecoinwatch-widget-2"
                      lcw-coin={index.code}
                      lcw-base="INR"
                      lcw-period="d"
                      lcw-color-tx="#000000"
                      lcw-color-bg="#ffffff"
                      lcw-border-w="0"
                    ></div>
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
