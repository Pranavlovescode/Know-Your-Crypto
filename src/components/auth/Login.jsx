import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../db/firebase";
import { useNavigate } from "react-router-dom";
import "./login.css";

const login = getAuth(app);
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const loginData = async (e) => {
    e.preventDefault();
    console.log("Logging In");
    await signInWithEmailAndPassword(login, email, pass)
      .then((result)=>{
        console.log(result)
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(()=>{
          setError(null)
        },5000)
      });
    // console.log(result);
    
  };

  return (
    <>
      <div className="py-3 d-flex justify-content-center bg-blue-dark align-items-center">
        <div className="form shadow">
          <div className="container my-5 p-4">
            <h2 className="fw-bolder">Login Form</h2>
            <form onSubmit={loginData}>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <div id="emailHelp" className="form-text text-start">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
              </div>
              <b className="text-danger">{error}</b>
              <br/>
              <button
                
                type="submit"
                className="btn btn-primary text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
