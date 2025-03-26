const mongoose = require ('mongoose');

const tweetSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    userEmail:{
        type: String
    },
   /* comments:[
        {
        content:{
            type: String,
            required: true,
        }
       }
    ] */  //METHOD 1 

      // each value of comment is an object (having 1 or more key value pair) and we want multiple objects as its values so multiple objects will be there and hence array of objects

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]

    // here it will store only objectid of comment schema even though you push 1 whole document of comment it will extract object id and will store

     
   
}, {timestamps: true});

const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports= Tweet;