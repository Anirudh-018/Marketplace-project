import classes from "./css/artPage.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
function ArtPage() {
  const { artId } = useParams();
  const [data, setData] = useState({});
  const [artistImages, setArtistImges] = useState([]);
  const [image, setImage] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/art/${artId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("JWT")}`,
        },
      })
      .then((res) => {
        setData(res.data);
        const imageUrl = res.data.imageUrl;
        if (imageUrl) {
          setImage(require(`../src/uploads/${imageUrl}`));
        }
      })
      .catch((err) => console.log(err));
  }, [artId]);
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/art/fetchAllByArtist/${data.artistId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("JWT")}`,
        },
      })
      .then((res) => {
        setArtistImges(res.data);
      })
      .catch((err) => console.log(err));
  }, [data.artistId]);
  
  return (
    <div className={classes.main}>
      <Nav />
      <img src={image} className={classes.art} alt="im"></img>
      <div className={classes.content}>
        <div className={classes.text}>
          <h1>{data.name}</h1>
          <h3>Published on 13.10.2023</h3>
          <h3>Descriptions</h3>
          <p className={classes.innerText}>
            {data.name}
            <br />
            {data.description}
          </p>
        </div>
        <div className={classes.price}>
          <h3>{`Current Buying price ${data.price}$`}</h3>
          <form>
            <button type="submit" className={classes.btn}>
              BUY
            </button>
          </form>
        </div>
      </div>
      <div className={classes.other}>
        <div className={classes.otherTitle}>
          <h1>More from this artist</h1>
          <button className={classes.otherBtn}>
            <Link to={`/artist/${data.artistId}`} className={classes.link}>
              Go to artist page
              <CiLocationArrow1 />
            </Link>
          </button>
        </div>
        <div className={classes.otherContent}>
        {
        artistImages
          .map((art, index) => {
            console.log(art);
            const val = art.imageUrl;
            const artImage = require(`../src/uploads/${val}`);
            return (
              <div className={classes.card} key={index}>
                <Link
                  to={`/artPage/${art._id}`}
                  style={{ color: "white" }}
                >
                  <img src={artImage} alt={`Artwork by ${art.artist}`} />
                  <div className={classes.container}>
                    <h4>
                      <b style={{ fontSize: "30px" }}>{art.artist}</b>
                    </h4>
                    <p style={{ fontSize: "20px" }}>Architect & Engineer</p>
                    <p>Price:{art.price}$</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ArtPage;
