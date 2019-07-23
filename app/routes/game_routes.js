const express = require('express')
const passport = require('passport')

//import the model of meme
const Game = require('../models/game')

const router = express.Router()
const requireToken = passport.authenticate('bearer',{session:false})
const customErros = require('../../lib/custom_errors')
const handle404 = customErros.handle404
const requireOwnership = customErros.requireOwnership

router.get('/game',requireToken,(req,res,next) => {
    const id = req.user.id;
   Game.find({'player':id})
   .then((games) => {
       res.status(200).json({games})
   })
   .catch(next);
})

module.exports = router     