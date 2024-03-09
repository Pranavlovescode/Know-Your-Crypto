import React from "react";
import './makeLogin.css'
function About() {
  return (
    <section className="about-section bg-blue1">
      <div className="container text-start">
        <h2 className="py-2">About Us</h2>

        <p className="my-4">
          Welcome to KnowYourCrypto, your go-to platform for tracking and
          managing your cryptocurrency investments.
        </p>

        <h3 className="my-4">Our Mission</h3>
        <p className="my-4">
          Our mission is to provide users with accurate and real-time
          information about the cryptocurrency market, empowering them to make
          informed decisions and stay ahead in the dynamic world of digital
          assets.
        </p>

        <h3 className="my-4">Key Features</h3>
        <ul className="my-4">
          <li>Real-time cryptocurrency prices and market data.</li>
          <li>Portfolio tracking and management tools.</li>
          <li>News and insights to keep you informed.</li>
          
        </ul>

        <h3 className="my-4">Meet the Team</h3>
        <p className="my-4">
          KnowYourCrypto is brought to you by a passionate team of individuals
          with expertise in the cryptocurrency and financial industries. Meet
          the minds behind the platform:
        </p>      

        <h3 className="my-4">Our Commitment to Security</h3>
        <p className="my-4">
          Security is our top priority. We employ robust measures to ensure the
          safety of your data and transactions within our platform.
        </p>        
      </div>
    </section>
  );
}

export default About;
