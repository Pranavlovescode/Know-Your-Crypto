import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../db/firebase";
import './login.css'

const signup = getAuth(app);

function Signup() {
 
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  // const showErrorMessage =()=>{
  //   setTimeout(()=>{
  //     setErr(null)
  //   },5000)
  // }

  const navigate = useNavigate();

  const signupData = async (e) => {
    e.preventDefault();
    if (!name || !email || !pass) {
      setErr("Please fill all the fields");
    }
    const userData = { name, email, pass };
    try {
      await createUserWithEmailAndPassword(signup, email, pass)
        .then(async (res) => {
          alert("Signup Successfull");
          const user = res.user;
          await updateProfile(user, {
            displayName: name,
          });
          console.log("result", res);
          navigate("/");
          try {
            const response = await fetch("/api/signup", {
              method: "POST",
              body: JSON.stringify(userData),
              headers: {
                "Content-Type": "application/json",
              },
            });
            const result = await response.json();
            if (response.ok) {
              setErr(null);
              console.log(result);
            } else {
              // setErr(result.message);
            }
          } catch (error) {
            setErr("Something went wrong");
          }
        })
        .catch((err) => {
          setErr(err.message)
          setTimeout(()=>{
            setErr(null)
          },5000)
        });
    } catch (error) {
      setErr(err.message);
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="row d-flex justify-content-center py-3 bg-blue-dark align-items-center m-0">
        <div className="col-12 p-0 col-lg-6 w-lg-100 shadow form-signup signup1">
          <div className="container my-5 p-4">
            <h2 className="fw-bolder">Signup Form</h2>
            <form onSubmit={signupData}>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  // required:true
                />
                <br/>
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
                  // required:true
                />
                
                <div id="emailHelp" className="form-text text-start">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <br/>
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
                <b className="text-danger">{err}</b>               
                
              </div>
              <button type="submit" className="btn btn-primary text-center">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
