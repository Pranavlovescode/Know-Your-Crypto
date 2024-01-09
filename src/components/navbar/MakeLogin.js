import React from "react";
import "./makeLogin.css";
import { NavLink } from "react-router-dom";
function MakeLogin() {
  // const styles={
  //   innerWidth:'100px',
  //   backgroundPosition : "contain"
  // }
  return (
    <>
      <div className="bg-blue-flex-3">
        <h2 className="py-4 text-blue">Welcome to Know Your Crypto</h2>
        <div className="d-flex py-5  flex-column flex-lg-row align-items-center lg-vh-100 bg-blue-flex-1">
          <img src="/img/coins.png" alt="background" srcset="" />
          <div className="container py-5">
            <h4 className="py-3 text-blue1">
              We will let you know all about Crypto
            </h4>
            <p>
              A cryptocurrency, crypto-currency, or crypto is a digital currency
              designed to work as a medium of exchange through a computer
              network that is not reliant on any central authority, such as a
              government or bank, to uphold or maintain it. It is a
              decentralized system for verifying that the parties to a
              transaction have the money they claim to have, eliminating the
              need for traditional intermediaries, such as banks, when funds are
              being transferred between two entities
            </p>
          </div>
        </div>
        <div className="d-flex py-5  flex-column flex-lg-row align-items-center lg-vh-100 ">
          <div className="container py-5">
            <h4 className="py-3 text-blue1">
              We will let you know all the Market Cap and Current Prices of the
              Crypto
            </h4>
            <p>
              where you can stay updated on the latest prices and market
              capitalizations of various cryptocurrencies. Our user-friendly
              interface provides real-time information on a diverse range of
              digital assets, allowing you to make informed decisions in the
              fast-paced world of crypto. Explore the dynamic prices of popular
              cryptocurrencies such as Bitcoin (BTC), Ethereum (ETH), and Ripple
              (XRP), as well as a comprehensive list of altcoins. Our platform
              displays up-to-the-minute price changes, percentage variations,
              and market capitalizations, ensuring you have a clear and concise
              overview of the crypto landscape.
            </p>
            <NavLink to={"/home/login"}>
              <button type="button" class="btn btn-primary">
                Know More
              </button>
            </NavLink>
          </div>
          <img src="/img/trading.png" alt="background" srcset="" />
        </div>
        <div className="d-flex py-5  flex-column flex-lg-row align-items-center lg-vh-100 ">
          <img src="/img/blockchain.png" alt="background" className="rotate" />
          <div className="container py-5">
            <h4 className="py-3 text-blue1">But why KnowYourCrypto ?</h4>
            <p>
              Whether you are a seasoned trader, a curious investor, or someone
              new to the crypto space, our website caters to your needs. Stay
              ahead of market trends, track your favorite tokens, and make
              data-driven choices with the valuable insights provided by our
              cryptocurrency price and market cap portal. Trust us to be your
              go-to resource for staying in the loop on the latest developments
              in the cryptocurrency market.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MakeLogin;
