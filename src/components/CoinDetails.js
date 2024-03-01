import React from 'react'
// import { useState , useEffect} from 'react';
import { useParams } from "react-router-dom";


function CoinDetails() {
  const { name, price } = useParams();
  
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
    <div>
      <h1>{name}</h1>
      <h3>{price}</h3>
      {/* <img src={image} alt="crypto" /> */}
      {/* {crypto.map((index) =>(
        <div key={index.id}>
          
          <h2>{index.symbol}</h2>
          
          <img src={index.image} alt="crypto" />
        </div>
      ))} */}
    </div>
  )
}

export default CoinDetails
