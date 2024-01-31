const express = require("express");
const router = express.Router();
const JWT = require("../strategies/JWT");
const ArtController = require("../controllers/ArtController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, req.userId+file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post(
  "/add",
  JWT.validateToken,
  upload.single("file"),
  ArtController.addArt
);
router.get("/", JWT.validateToken, ArtController.fetchAllArt);
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
router.get("/:id", JWT.validateToken, ArtController.fetchOneArt);
router.delete("/:id", JWT.validateToken, ArtController.delete);
router.patch("/:id", JWT.validateToken, ArtController.updateArt);
module.exports = router;
