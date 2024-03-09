import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/navbar/Home";
import About from "./components/navbar/About";
import CoinDetails from "./components/CoinDetails";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./components/db/firebase";
import MakeLogin from "./components/navbar/MakeLogin";
import ContactMe from "./components/ContactMe";

// import LoginSuccess from "./LoginSuccess";

const auth = getAuth(app);

function App() {
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is login
        setIsLogin(user);
      } else {
        //user is signout
        setIsLogin(null);
      }
    });
  }, []);

  return (
    <>
      {isLogin === null ? (
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<MakeLogin />} />
              <Route path="/about" element={<About />} />
              <Route path="/home/login" element={<Login />} />
              <Route path="/home/signup" element={<Signup />} />
              <Route path="/contact-me" element={<ContactMe />} />
            </Routes>
          </div>
        </Router>
      ) : (
        <>
          <Router>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-me" element={<ContactMe />} />
                <Route path="/crypto-details/:name/:price/:market_cap_change_percentage_24h/:symbol/:high_24h/:low_24h/:market_cap/:total_volume/:circulating_supply/:total_supply" element={<CoinDetails />} />
              </Routes>
            </div>
          </Router>
        </>
      )}
    </>
  );
}
export default App;
