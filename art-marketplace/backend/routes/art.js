const express = require("express");
const router = express.Router();
const JWT = require("../strategies/JWT");
const ArtController = require("../controllers/ArtController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post(
  "/add",
  upload.single("file"),
  JWT.validateToken,
  ArtController.addArt
);
router.get("/fetchAll", JWT.validateToken, ArtController.fetchAllArt);
router.get(
  "/fetchAllByArtist/:id",
  JWT.validateToken,
  ArtController.fetchAllByArtist
);
router.get(
  "/fetchAllByOwner/:id",
  JWT.validateToken,
  ArtController.fetchAllByOwner
);
router.get("/fetchOne/:id", JWT.validateToken, ArtController.fetchOneArt);
router.delete("/deleteArt/:id", JWT.validateToken, ArtController.delete);
router.patch("/updateArt/:id", JWT.validateToken, ArtController.updateArt);
module.exports = router;
