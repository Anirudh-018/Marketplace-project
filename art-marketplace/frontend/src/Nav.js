import { Link } from "react-router-dom";
import "./css/Nav.css";
import { CiShop } from "react-icons/ci";
function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <CiShop className="iconMarket" />
        <Link to="/"><b className="item">Art Market</b></Link>
      </div>
      <div className="links">
        <Link to="/art">
          <div className="item">Marketpace</div>
        </Link>
        <Link to="/profile">
          <div className="signup">
            <button>
              <CiShop className="iconSignup" />
              <b>
                <Link to="/profile">profile</Link>
              </b>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
