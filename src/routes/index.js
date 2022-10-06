const { Router } = require("express");
const characterRoute = require('./character');
const episodeRoute = require('./episode');
const character_id = require("./characterId");

const router = Router();

// Configurar los routers
router.get("/character/:id", character_id);
router.use('/character', characterRoute)
router.use('/episode', episodeRoute)

module.exports = router;
