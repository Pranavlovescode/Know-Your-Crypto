import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/navbar/Home";
import About from "./components/navbar/About";
import CoinDetails from "./components/CoinDetails";
import Signup from "./Signup";
import Login from "./Login";
import LoginSuccess from "./LoginSuccess";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <LoginSuccess/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/crypto-details" element={<CoinDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
