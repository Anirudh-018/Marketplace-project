import { Link, useNavigate } from "react-router-dom";
import "./css/Nav.css";
import { CiLogout, CiShop } from "react-icons/ci";
import axios from "axios";
function Nav() {
  const navigate = useNavigate();
  function handleLogout() {
    axios
      .post("http://localhost:5000/auth/logout")
      .then((res) => {
        if (res.status === 200) {
          alert(`Logout successful!`);
          navigate("/");
        } else {
          alert("Unexpected response status: " + res.status);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="nav">
      <div className="logo">
        <CiShop className="iconMarket" />
        <Link to="/home">
          <b className="item">Art Market</b>
        </Link>
      </div>
      <div className="links">
        <Link to="/art">
          <div className="item">Marketpace</div>
          <span className="spanItem"></span>
        </Link>
        <Link to={`/owned/${localStorage.getItem("userId")}`}>
          <div className="item">Owned arts</div>
          <span className="spanItem"></span>
        </Link>
        <Link to="/profile">
          <div className="signup">
            <button>
              <CiShop className="iconSignup" />
              <b>
                <Link to={`/profile/${localStorage.getItem("userId")}`}>
                  profile
                </Link>
              </b>
            </button>
          </div>
        </Link>
        <div className="signup">
          <button onClick={handleLogout}>
            <CiLogout className="iconSignup" />
            <b>Logout</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
