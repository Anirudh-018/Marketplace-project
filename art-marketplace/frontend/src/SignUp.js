import "./css/signup.css";
import monaLisa from "./images/mona-lisa.jpeg";
import * as icons from "react-icons/bs";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cPwd, setcPwd] = useState("");
  const [isEmail, setValidEmail] = useState(true);
  const [isPwd, setValidPwd] = useState(true);
  const [iscPwd, setValidcPwd] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(emailRegex.test(value));
  };

  const validatePassword = (value) => {
    setValidPwd(value.length >= 8);
  };

  const validateConfirmPassword = (value) => {
    setValidcPwd(value === pwd);
  };

  const handleSignup = () => {
    if (name === "" || email === "" || pwd === "" || cPwd === "") {
      setErrorMessage("Please fill in all required fields.");
    } else {
      setErrorMessage(""); // Clear any previous error messages
    }

    validateEmail(email);
    validatePassword(pwd);
    validateConfirmPassword(cPwd);

    if (!isEmail || !isPwd || !iscPwd) {
      setErrorMessage("Please check the fields for errors.");
      return;
    }

    // Continue with signup logic if validation passes
    alert(`Hi ${name}! Signup successful! Redirecting to dashboard...`);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="image">
          <img src={monaLisa} alt="monalisa" />
        </div>
        <div className="create">
          <h1>Create Account</h1>
          <h2>
            Welcome! Enter Your Details And Start <br />
            Creating, Collecting And Selling Art Works
          </h2>
          <form>
            <div className="input-container">
              <icons.BsPerson className="icon" />
              <input
                className={`input-field`}
                type="text"
                placeholder="Username"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value); // Example validation: Name is not empty
                }}
              />
            </div>

            <div className={`input-container ${!isEmail ? "invalid" : ""}`}>
              <icons.BsEnvelope className="icon" />
              <input
                className={`input-field ${!isEmail ? "invalid" : ""}`}
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => {
                  setMail(e.target.value);
                  validateEmail(e.target.value);
                }}
              />
            </div>
            <div className={`input-container ${!isPwd ? "invalid" : ""}`}>
              <icons.BsLock className="icon" />
              <input
                className={`input-field ${!isPwd ? "invalid" : ""}`}
                type="password"
                placeholder="Password"
                name="password"
                value={pwd}
                onChange={(e) => {
                  setPwd(e.target.value);
                  validatePassword(e.target.value);
                }}
              />
            </div>

            <div className={`input-container ${!iscPwd ? "invalid" : ""}`}>
              <icons.BsLock className="icon" />
              <input
                className='input-field'
                type="password"
                placeholder="Confirm Password"
                name="confirm-pass"
                value={cPwd}
                onChange={(e) => {
                  setcPwd(e.target.value);
                  validateConfirmPassword(e.target.value);
                }}
              />
            </div>

            <button type="button" className="submit" onClick={handleSignup}>
              Create Account
            </button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
