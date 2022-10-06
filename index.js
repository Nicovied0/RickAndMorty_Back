const server = require("./src/app.js");
///importante////
const getEpisodesApi = require("./src/controllers/episode");
const { conn } = require("./src/db.js");

// Syncing all the models at once.

// Para la precarga cuando se levanta el server, ejecutar la funcion getEpisodes(). Al ser una peticion vamos a usar async await.
const { PORT } = process.env;
conn.sync({ force: true }).then(() => {
  getEpisodesApi()
  server.listen(PORT, () => {
    console.log("Listening at 3001"); // eslint-disable-line no-console
  });
});
