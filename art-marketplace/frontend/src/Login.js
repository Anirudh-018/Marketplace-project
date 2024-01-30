import Nav from "./Nav";
import monaLisa from "./images/mona-lisa.jpeg";
import Footer from "./Footer";
import * as icons from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const handleSignup = () => {
    if (data.name === "" || data.email === "" || data.password === "" || data.confirm === "") {
      setErrorMessage("Please fill in all required fields.");
      return;
    } else {
      setErrorMessage(""); // Clear any previous error messages
    }
    console.log(data);
    axios
      .post("http://localhost:5000/auth/login", data)
      .then((res) => {
        if (res.status === 200) {
          alert(`Hi ${name}! login successful! Redirecting to home...`);
          navigate("/");
        } else {
          alert("Unexpected response status: " + res.status);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          setErrorMessage("invalid credentials");
          return;
        } else {
          console.log(err);
          return;
        }
      });
  }
  return (
    <div>
      {/* <Nav /> */}
      <div className="container">
        <div className="image">
        <div className="video-container">
        <iframe className='video-background' src="https://www.youtube.com/embed/BR939M48BG4?si=CGuihCvmuFMpz6gq&amp;controls=0" title="YouTube video player" allowfullscreen></iframe>
          </div>
        </div>
        <div className="create">
          <h1>Login into your account</h1>
          <h2>Welcome! Enter Your Details to login</h2>
          <form>
            <div className="input-container">
              <icons.BsEnvelope className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="username"
                name="userName"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setData({ ...data, [e.target.name]: e.target.value }); // Example validation: Name is not empty
                }}
              />
            </div>
            <div className="input-container">
              <icons.BsLock className="icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="password"
                value={pwd}
                onChange={(e) => {
                  setPwd(e.target.value);
                  setData({ ...data, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <button type="button" className="submit" onClick={handleSignup}>
              login
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default Login;
