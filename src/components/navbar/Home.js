import React from "react";

function Home() {
  return (
    <>
      <div className="row">
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
        <div className="col-12 col-lg-7">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
