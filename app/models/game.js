const mongoose = require ('mongoose')

const gameSchema = new mongoose.Schema({
    character:{
        type:String,
        required: true  
    },
    win:{
        type: Boolean
    },
    player:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }
},
    {
        timestamps:true
    }
)

const Game = mongoose.model('Game', gameSchema)

module.exports = Game