const artModel = require("../models/art");
const UserModel=require("../models/user")
const ArtController = {
  async addArt(req, res) {
    try {
      const data = req.body;
      const file = req.file;
      console.log(file);
      if (!file) {
        return res.status(400).send("No file uploaded");
      }
      const imageUrl = req.userId + file.originalname;

      const existingArt = await artModel.findOne({ name: data.name });

      if (!existingArt) {
        const artist=await UserModel.findById(data.artistId);
        const owner=await UserModel.findById(data.ownerId);
        const art = await artModel.create({
          name: data.name,
          artist: artist.userName,
          imageUrl: imageUrl,
          description: data.description,
          price: data.price,
          owner: owner.userName,
        });
        if (art) {
          res.status(201).send("Art added to the marketplace");
        } else {
          res.status(406).send("Couldn't add art. Provide full details");
        }
      } else {
        res.status(403).send("Art already exists");
      }
    } catch (error) {
      console.error("Error adding art:", error);
      res.status(500).send("Internal server error");
    }
  },
  async fetchAllArt(req, res) {
    try {
      const arts = await artModel.find();
      if (arts) {
        res.status(200).send(arts);
      } else {
        res.status(401).send("not found");
      }
    } catch (e) {
      res.status(500).send("Internal server Error");
    }
  },
  async fetchAllByArtist(req, res) {
    const artistId = req.params.id;
    try {
      const arts = await artModel.find({ artistId: artistId });
      if (arts) {
        res.status(200).send(arts);
      } else {
        res.status(401).send("not found");
      }
    } catch (e) {
      res.status(500).send("Internal server Error");
    }
  },
  async fetchAllByOwner(req, res) {
    const ownerId = req.params.id;
    try {
      const arts = await artModel.find({ ownerId: ownerId });
      if (arts) {
        res.status(200).send(arts);
      } else {
        res.status(401).send("not found");
      }
    } catch (e) {
      res.status(500).send("Internal server Error");
    }
  },
  async fetchOneArt(req, res) {
    const id = req.params.id;
    try {
      const art = await artModel.findById(id);
      if (art) {
        res.status(200).send(art);
      } else {
        res.status(401).send("not found");
      }
    } catch (e) {
      res.status(500).send("Internal server Error");
    }
  },
  async delete(req, res) {
    const id = req.params.id;
    if (id.length < 24) {
      res.status(400).send("wrong id format");
    }
    try {
      const art = await artModel.findById(id);
      if (art) {
        const deleted = await artModel.deleteOne({ _id: id });
        if (deleted) {
          res.status(200).send("deleted art");
        } else {
          res.status(400).send("couldn't delete");
        }
      } else {
        res.status(401).send("not found");
      }
    } catch (e) {
      res.status(500).send("Internal server Error");
    }
  },
  async updateArt(req, res) {
    const id = req.params.id;
    if (id.length < 24) {
      res.status(400).send("wrong id format");
    }
    try {
      const art = await artModel.findById(id);
      console.log(art);
      if (art) {
        const updatedArt = await artModel.findOneAndUpdate(
          { _id: id },
          req.body,
          { new: true }
        );
        if (updatedArt) {
          res.status(200).send(updatedArt);
        } else {
          res.status(400).send("couldn't delete");
        }
      } else {
        res.status(401).send("not found");
      }
    } catch (e) {
      res.status(500).send("Internal server error");
    }
  },
};
module.exports = ArtController;
