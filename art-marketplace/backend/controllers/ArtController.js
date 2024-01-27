const artModel = require("../models/art");
const ArtModel = require("../models/art");
const ArtController = {
  async addArt(req, res) {
    const data = req.body;
    console.log(req.body);
    try {
      if (data) {
        const art = await ArtModel.create({
          name: data.name,
          artistId: data.artistId,
          imageUrl: data.imageUrl,
          description: data.description,
          price: data.price,
          ownerId: data.ownerId,
        });
        if (art) {
          res.status(201).send("art added to marketplace");
        } else {
          res.status(406).send("cant add art provide full details");
        }
      }
    } catch (e) {
      res.status(500).send("Internal server error");
    }
  },
  async fetchAllArt(req, res) {
    try {
      const arts = await artModel.find();
      if (arts) {
        res.status(302).send(arts);
      } else {
        res.status(401).send("not found");
      }
    } catch (e) {
      res.status(500).send("Internal server Error");
    }
  },
  async fetchAllByArtist(req, res) {
    const artistId = req.query.artistId;
    try {
      const arts = await artModel.find({ artistId: artistId });
      if (arts) {
        res.status(302).send(arts);
      } else {
        res.status(401).send("not found");
      }
    } catch (e) {
      res.status(500).send("Internal server Error");
    }
  },
  async fetchAllByOwner(req, res) {
    const ownerId = req.query.ownerId;
    try {
      const arts = await artModel.find({ ownerId: ownerId });
      if (arts) {
        res.status(302).send(arts);
      } else {
        res.status(401).send("not found");
      }
    } catch (e) {
      res.status(500).send("Internal server Error");
    }
  },
  async fetchOneArt(req, res) {
    const id = req.param.id;
    try {
      const art = await artModel.findById(id);
      if (art) {
        res.status(302).send(art);
      } else {
        res.status(401).send("not found");
      }
    } catch (e) {
      res.status(500).send("Internal server Error");
    }
  },
  async delete(req, res) {
    const id = req.param.id;
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
