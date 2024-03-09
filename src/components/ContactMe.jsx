import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactMe() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const contactMeFormData = async (e) => {
    e.preventDefault();
    const data = { firstName, lastName, email, message };
    try {
      if (!firstName || !lastName || !message || !email) {
        setErr("Please fill all the required fields");
        setTimeout(() => {
          setErr(null);
        }, 5000);
      }
      const result = await fetch("/api/contact-me", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await result.json();
      setConfirmMessage("Message sent successfully.");
      setTimeout(() => {
        setConfirmMessage("");
        setFirstName("");
        setLastName("");
        setMessage("");
        setEmail("");
      }, 5000);
      console.log(response);

      navigate("/contact-me");
    } catch (error) {
      console.log(error);
      alert("Server Error. Please try again");
    }
  };
  return (
    <>
      <div className="row d-flex justify-content-center py-3 bg-blue-dark align-items-center m-0">
        <div className="col-12 p-0 col-lg-6 w-lg-100 shadow form-signup signup1">
          <div className="container my-5 p-4">
            <h2 className="fw-bolder">Contact Us</h2>
            <form onSubmit={contactMeFormData}>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  // required:true
                />
                <br />
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  // required:true
                />
                <br />
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
                <br />
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  // required:true
                />
                {/* <div id="emailHelp" className="form-text text-start">
                  We'll never share your email with anyone else.
                </div> */}
              </div>
              {{ err } ? (
                <div>
                  <b className="text-danger">{err}</b>
                </div>
              ) : (
                <div>
                  <b className="text-success">{confirmMessage}</b>
                </div>
              )}

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

export default ContactMe;
