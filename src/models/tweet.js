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
    ]   // METHOD 2

    // here it will store only objectid of comment schema even though you push 1 whole document of comment it will extract object id and will store

     
   
}, {timestamps: true});

tweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} createdBy ${this.userEmail}`;
})  // this is vitual which does not persist in database but can be used during runtime. this is property/key of a documemt that can be used either during get or set or anything


  tweetSchema.pre('save',function(next){
    console.log('Inside a hook');
    this.content= this.content + '...';
    next();
  })  // note if there is async and await func and no next argument then no need to call next explicitly only

  // in mongoose hooks are attached with schema so here before save some operations will be done

const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports= Tweet;