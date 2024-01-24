import { CiGlobe, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import Footer from "./Footer";
import Nav from "./Nav";
import classes from "./css/profile.module.css";
import art from "./images/home-art.jpeg";
import art1 from "./images/art1.jpeg";
import art7 from "./images/art7.jpg";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div>
      <Nav />
      <div className={classes.container}>
        <div className={classes.overlay}>
          <img src={art7} alt="profile" className={classes.back}></img>
        </div>
        <img src={art1} alt="image1" className={classes.small}></img>
      </div>
      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.lc}>
            <h2>The Name</h2>
            <h3>Bio</h3>
            <h3>hello this is the bio of the user</h3>
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
          <Link className={classes.btn} to='/art'>Buy</Link>
          <Link className={classes.btni} to='/sell'>Sell</Link>
          <Link className={classes.btn}>EditProfile</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;