import classes from "./css/artPage.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function ArtPage() {
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
  const { artId } = useParams();
  const [data, setData] = useState({});
  const [artistImages, setArtistImges] = useState([]);
  const [image, setImage] = useState();
  const [bought, setBought] = useState(false);
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
        if (res.data.ownerId == localStorage.getItem("userId")) {
          setBought(true);
        }
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
  function buy() {
    axios
      .patch(
        `http://localhost:5000/art/${artId}`,
        { ownerId: localStorage.getItem("userId") },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("JWT")}`,
          },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          alert("item added to assets");
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }
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
        {!bought && (
          <div className={classes.price}>
            <h3>{`Current Buying price ${data.price}$`}</h3>
            <button type="submit" className={classes.btn} onClick={buy}>
              BUY
            </button>
          </div>
        )}
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
          {artistImages.map((art, index) => {
            console.log(art);
            const val = art.imageUrl;
            const artImage = require(`../src/uploads/${val}`);
            return (
              <div className={classes.card} key={index}>
                <Link to={`/artPage/${art._id}`} style={{ color: "white" }}>
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
