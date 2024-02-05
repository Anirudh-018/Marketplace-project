// import Footer from "./Footer";
import Nav from "./Nav";
import classes from "./css/sell.module.css";
import { useState } from "react";
import * as icons from "react-icons/bs";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Sell() {
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
  const userId = useParams();
  const [fileImg, setFileImg] = useState();

  function handleChange(e) {
    setFileImg(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  }
  const [file, setFile] = useState("");
  const [artName, setArtName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const formData1 = new FormData();
    formData1.append("file", file);
    formData1.append("name", artName);
    formData1.append("description", description);
    formData1.append("price", price);
    formData1.append("ownerId", `${userId.userId}`);
    formData1.append("artistId", `${userId.userId}`);
    console.log(Cookies.get("JWT"));
    axios
      .post("http://localhost:5000/art/add", formData1, {
        headers: {
          Authorization: `Bearer ${Cookies.get("JWT")}`,
        },
      })
      .then((res) => {
        alert(`listed image for selling`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className={classes.sell}>
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className={classes.upload}>
          <h2>Add Image:</h2>
          <img
            src={fileImg}
            className={fileImg ? classes.image : classes.hidden}
            alt="dummy"
          />
          <div className={classes.inputContainer}>
            <icons.BsPerson className={classes.icon} />
            <input
              className={classes.inputField}
              type="file"
              name="image"
              onChange={(e) => {
                handleChange(e);
                // console.log(e.target.files[0]);
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <h2>Art Name:</h2>
          <div className={classes.inputContainer}>
            <icons.BsPerson className={classes.icon} />
            <input
              className={classes.inputField}
              type="text"
              placeholder="ArtName"
              name="art"
              onChange={(e) => {
                setArtName(e.target.value);
              }}
            />
          </div>
          <h2>Description:</h2>
          <div className={classes.inputContainer}>
            <icons.BsPerson className={classes.icon} />
            <textarea
              className={classes.inputField}
              type="textarea"
              placeholder="Description"
              name="desc"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <h2>Price:</h2>
          <div className={classes.inputContainer}>
            <icons.BsPerson className={classes.icon} />
            <input
              className={classes.inputField}
              type="text"
              placeholder="Price"
              name="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <h2>Type:</h2>
          <div className={classes.inputContainer}>
            <icons.BsPerson className={classes.icon} />
            <input
              className={classes.inputField}
              type="text"
              placeholder="Type"
              name="type"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </div>
          <button type="submit" className={classes.submitButton}>
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Sell;
