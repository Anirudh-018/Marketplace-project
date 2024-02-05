import { CiGlobe, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import Footer from "./Footer";
import Nav from "./Nav";
import classes from "./css/profile.module.css";
import art7 from "./images/art7.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkJWTCookie = () => {
      const jwtCookie = Cookies.get("JWT");

      if (!jwtCookie) {
        // Redirect to a 404 page or any other page of your choice
        navigate("/err");
      }
    };

    checkJWTCookie();
  }, [navigate]);
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/getDetails/${userId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("JWT")}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Nav />
      <div className={classes.container}>
        <div className={classes.overlay}>
          <img src={art7} alt="profile" className={classes.back}></img>
        </div>
        <img src={user.imageUrl} alt="image1" className={classes.small}></img>
      </div>
      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.lc}>
            <h2>{user.userName}</h2>
            <h3>Bio</h3>
            <h3>{user.bio}</h3>
            <h3>Links</h3>
            <div className={classes.social}>
              <CiTwitter className={classes.item}></CiTwitter>
              <CiInstagram className={classes.item}></CiInstagram>
              <CiYoutube className={classes.item}></CiYoutube>
              <CiGlobe className={classes.item}></CiGlobe>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <Link className={classes.btn} to="/art">
            Buy
          </Link>
          <Link className={classes.btni} to={`/sell/${userId}`}>
            Sell
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
