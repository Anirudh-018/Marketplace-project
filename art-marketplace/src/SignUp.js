import "./css/signup.css";
import monaLisa from "./images/mona-lisa.jpeg";
import * as icons from "react-icons/bs";
import Nav from "./Nav";
import Footer from "./Footer";
function SignUp() {
  return (
    <div>
      <Nav/>
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
                className="input-field"
                type="text"
                placeholder="Username"
                name="name"
              />
            </div>
            <div className="input-container">
              <icons.BsEnvelope className="icon" />
              <input
                className="input-field"
                type="email"
                placeholder="Email"
                name="mail"
              />
            </div>
            <div className="input-container">
              <icons.BsLock className="icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="input-container">
              <icons.BsLock className="icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Confirm Password"
                name="confirm-pass"
              />
            </div>
            <button type="submit" className="submit">
              Create Account
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SignUp;
