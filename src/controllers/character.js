const axios = require('axios')
const { Character, Episode } = require('../db')


const getApiCharacter = async () => {
  try {
    const allCharacters = []

    let apiUrl = "https://rickandmortyapi.com/api/character"
    for (let i = 0; i < 10; i++) {
      let apiData = await axios.get(apiUrl)


      apiData.data.results?.forEach((el) => {
        return allCharacters.push({
          id: el.id,
          name: el.name,
          species: el.species,
          origin: el.origin.name,
          image: el.image,
          episode: el.episode.map(i => i),
          characterApi: true,
        });
      });

      apiUrl = apiData.data.info.next
    }
    return allCharacters
  } catch (error) {
    console.log(error)
  }
}

const getDbCharacter = async () => {
  return await Character.findAll({
    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      }
    }
  });
}

const getAllInfo = async () => {
  try {
    const dbInfo = await getApiCharacter();
    const apiInfo = await getDbCharacter();

    const InfoTotal = dbInfo?.concat(apiInfo);
    return InfoTotal;
  } catch {
    console.log('Error al hacer el llamdo a all Info')
  }
}



module.exports = {
  getApiCharacter,
  getDbCharacter,
  getAllInfo
}