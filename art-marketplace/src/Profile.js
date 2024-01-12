import Footer from "./Footer";
import Nav from "./Nav";
import classes from "./css/profile.module.css";
import art from "./images/home-art.jpeg";
function Profile() {
  return (
    <div>
      <Nav />
      <div className={classes.container}>
        <div className={classes.overlay}>
          <img src={art} alt="profile" className={classes.back}></img>
        </div>
        <img src={art} alt="image1" className={classes.small}></img>
      </div>
      <div className={classes.content}>
        <div className={classes.left}>
          <h1>The Name</h1>
        </div>
        <div className={classes.right}>
          <button className={classes.btn}>hello</button>
          <button className={classes.btni}>hello</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Profile;
