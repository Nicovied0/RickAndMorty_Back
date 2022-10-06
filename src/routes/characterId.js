const {Router} = require("express");
const {Character, Episode} = require("../db");
const {characterID} = require("../controllers/characterId");
const router = Router();

router.get("/character/:id", async (req, res) => {
  const {id} = req.params;
  res.status(200).send(await characterID(id));
});

module.exports = router;