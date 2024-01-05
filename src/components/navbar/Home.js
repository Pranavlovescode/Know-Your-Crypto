import React from "react";
import coinDetail from "./coinDetail";
function Home() {
  
    const data=coinDetail.map((index) => (
      <ul key={index.id} className="list-group">
        <li className={`list-group-item d-flex justify-content-between align-items-start text-white ${index.mc>=0?'bg-success':'bg-danger'}`}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              {index.name} ({index.s_name})
            </div>
            {index.mc} %
          </div>
          <span className="mt-2">$ {index.price}</span>
        </li>
      </ul>
    ));

  return (
    <>
      <div className="row p-2">
        <div className="col-12 col-lg-5">
          <div className="cointainer">
            <h2>Bitcoin</h2>
            <p>
              Bitcoin is the first decentralized cryptocurrency. Nodes in the
              peer-to-peer bitcoin network verify transactions through
              cryptography and record them in a public distributed ledger,
              called a blockchain, without central oversight.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-7">{data}</div>
      </div>
    </>
  );
}

export default Home;
