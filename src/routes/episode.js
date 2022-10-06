const express = require("express")
const {Episode} = require("../db");

const router = express.Router()

router.get('/', async(req, res, next)=>{
    try {
        const apiData = await Episode.findAll();

        apiData?
        res.status(200).send(apiData):
        res.status(404).send("no hay datos de la API")

    } catch (error) {
        console.log(error)
        
    }
})

module.exports = router;