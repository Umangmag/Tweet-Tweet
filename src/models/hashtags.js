const mongoose = require('mongoose');

const hashtagSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, {timestamps: true})

const Hashtag= mongoose.model('Hahtag', hashtagSchema);
module.exports= Hashtag;  