import Footer from "./Footer";
import Nav from "./Nav";
import classes from "./css/home.module.css";
import art from "./images/home-art.jpeg";
import art1 from './images/art1.jpeg';
import art2 from './images/art2.jpeg';
import art3 from './images/art3.jpeg';
import art4 from './images/art4.jpeg';
import art5 from './images/art5.jpeg';
import art6 from './images/art6.jpg';
import art7 from './images/art7.jpg';
function Home() {
  return (
    <div className={classes.main}>
      <Nav />
      <div className={classes.init}>
        <div className={classes.left}>
          <h1>
            Discover digital Art
            <br />
            Marketplace for digital art
          </h1>
          <h3>
            A one stop solution to art trade and collection.
            <br />
            Explore the diverse world of art and their market
          </h3>
          <div className={classes.initContent}>
            <h3>
              <span className={classes.span}></span>k+ 
              <br />
              sales
            </h3>
            <h3>
              <span className={classes.span}></span>k+ 
              <br />
              users
            </h3>
            <h3>
              <span className={classes.span}></span>k+ 
              <br />
              artist
            </h3>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.card}>
            <img src={art} alt="Avatar" />
            <div className={classes.container}>
              <h4>
                <b style={{ fontSize: "30px" }}>John Doe</b>
              </h4>
              <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
            </div>
          </div>
        </div>
      </div>
      <h1>Trending Art Collections</h1>
      <h3>
        <b>Checkout our weekly updated trending collections</b>
      </h3>
      <div className={classes.popular}>
        {/* change the card images and the desc using the hooks and the response from the api */}
        <div className={classes.card1}>
          <img src={art1} className={classes.largeImage} alt="im1"></img>
          <div className={classes.sub}>
            <img src={art2} className={classes.subImage} alt="im1"></img>
            <img src={art3} className={classes.subImage} alt="im1"></img>
            <img src={art4} className={classes.subImage} alt="im1"></img>
          </div>
          <h3>DSGN IMAGES</h3>
          <h4>mister fox</h4>
        </div>
        <div className={classes.card1}>
          <img src={art5} className={classes.largeImage} alt="im1"></img>
          <div className={classes.sub}>
            <img src={art6} className={classes.subImage} alt="im1"></img>
            <img src={art7} className={classes.subImage} alt="im1"></img>
            <img src={art1} className={classes.subImage} alt="im1"></img>
          </div>
          <h3>DSGN IMAGES</h3>
          <h4>mister fox</h4>
        </div>
        <div className={classes.card1}>
          <img src={art2} className={classes.largeImage} alt="im1"></img>
          <div className={classes.sub}>
            <img src={art3} className={classes.subImage} alt="im1"></img>
            <img src={art4} className={classes.subImage} alt="im1"></img>
            <img src={art5} className={classes.subImage} alt="im1"></img>
          </div>
          <h3>DSGN IMAGES</h3>
          <h4>mister fox</h4>
        </div>
      </div>
      <h1>Latest artworks</h1>
      <h3>
        <b>Checkout our latest artworks uploaded</b>
      </h3>
      <div className={classes.latest}>
        <div className={classes.card}>
          <img src={art6} alt="Avatar" className={classes.cimg} />
          <div className={classes.container}>
            <h4>
              <b style={{ fontSize: "30px" }}>John Doe</b>
            </h4>
            <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
          </div>
        </div>
        <div className={classes.card}>
          <img src={art7} alt="Avatar" className={classes.cimg}/>
          <div className={classes.container}>
            <h4>
              <b style={{ fontSize: "30px" }}>John Doe</b>
            </h4>
            <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
          </div>
        </div>
        <div className={classes.card}>
          <img src={art1} alt="Avatar" className={classes.cimg}/>
          <div className={classes.container}>
            <h4>
              <b style={{ fontSize: "30px" }}>John Doe</b>
            </h4>
            <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
          </div>
        </div>
      </div>
      <h1>How It Works</h1>
      <h3>
        <b>Know how the marketplace works</b>
      </h3>
      <div className={classes.steps}>
        <div className={classes.stepItem}>
          <h3>SignUp in the marketplace</h3>
          <h4>skfnsfnsafnkasfnksafajf<br/>jkjabsfabfajsbfajf</h4>
        </div>
        <div className={classes.stepItem}>
          <h3>SignUp in the marketplace</h3>
          <h4>skfnsfnsafnkasfnksafajf<br/>jkjabsfabfajsbfajf</h4>
        </div>
        <div className={classes.stepItem}>
          <h3>SignUp in the marketplace</h3>
          <h4>skfnsfnsafnkasfnksafajf<br/>jkjabsfabfajsbfajf</h4>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Home;
