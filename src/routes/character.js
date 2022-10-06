const express = require ('express')
const {getAllInfo} = require ('../controllers/character')
const {Character, Episode} = require("../db")

const router = express.Router()


router.get('/', async( req, res)=>{

  const {name} = req.query;
  const allCharacters = await getAllInfo();
  if(name) {
      const byName = allCharacters.filter(i => i.name.toLowerCase().includes(name.toLocaleLowerCase()))
      byName.length ? 
      res.status(200).send(byName) :
      res.status(404).send("No hay personaje con ese nombre");
  } else {
      res.status(200).send(allCharacters)
  };
}
  );


//get por id
// router.get("/:id",async (req, res)=>{
//   const id = req.params.id;
//   const characterTotal = await getAllInfo()
//   if(id){
//    let characterId = await characterTotal.filter(e => e.id == id)
//    characterId.length?
//    res.status(200).send(characterId):
//    res.status(404).send('Error en character id')
//   }
//  })


// router.post("/", async (req, res, next) => {
//     const { name, species, origin, image, episode } = req.body;
  
//     const newCharacter = await Character.create({
//       name,
//       species,
//       origin,
//       image,
//       episode
//     });
  
    /* newCharacter.addEpisode(episodes); */
  
  //   const episodeDb = await Episode.findAll({
  //     where: { name: episode }, // or episode?
  //   });
  //   newCharacter.addEpisode(episodeDb);
  
  //   /* hasta aca */
  
  //   newCharacter
  //     ? res.status(201).send(newCharacter)
  //     : res.status(404).send("Error al crear el personaje");
  
  //   return newCharacter;
  // });
  


module.exports = router