import React from "react";
// import { useState , useEffect} from 'react';
import { useParams } from "react-router-dom";

function CoinDetails() {
  const {
    name,
    price,
    market_cap_change_percentage_24h,
    symbol,
    high_24h,
    low_24h,
    market_cap,
    total_volume,
    circulating_supply,
    total_supply,
  } = useParams();

  // const [crypto, setCrypto] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&precision=2"
  //     );
  //     const data = await response.json();
  //     setCrypto(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }
  // useEffect(()=>{
  //   fetchData();
  // },[])
  return (
    <>
      <h1 className="text-center">The all info you want about crypto</h1>
      <h1 className="text-center">Details</h1>
      <h1 className="">
        {name}({symbol})
      </h1>
      <div className="d-flex flex-column flex-lg-row m-3 fs-5">
        <div className="p-4 m-3 d-flex justify-content-start flex-column">
          <p>
            Price :<b> &#x20b9;{price}</b>
          </p>
          {market_cap_change_percentage_24h > 0 ? (
            <p>
              Market Cap Change (24h) :{" "}
              <b className="text-success">
                {market_cap_change_percentage_24h}%
              </b>
            </p>
          ) : (
            <p>
              Market Cap Change (24h) :{" "}
              <b className="text-danger">{market_cap_change_percentage_24h}%</b>
            </p>
          )}
          <p>
            High 24h :<b> &#x20b9;{high_24h}</b>
          </p>
          <p>
            Low 24h :<b> &#x20b9;{low_24h}</b>
          </p>
          <p>
            Market Cap :<b> &#x20b9;{market_cap}</b>
          </p>
          <p>
            Total Volume :
            <b>
              {" "}
              {total_volume} {symbol}
            </b>
          </p>
          <p>
            Circulating Supply :
            <b>
              {" "}
              {circulating_supply} {symbol}
            </b>
          </p>
          <p>
            Total Supply :
            <b>
              {" "}
              {total_supply} {symbol}
            </b>
          </p>
        </div>

        <div className="d-flex flex-column">This is graph section
        </div>

        {/* <img src={image} alt="crypto" /> */}
        {/* {crypto.map((index) =>(
        <div key={index.id}>
        
        <h2>{index.symbol}</h2>
        
        <img src={index.image} alt="crypto" />
        </div>
      ))} */}
      </div>
    </>
  );
}

export default CoinDetails;
