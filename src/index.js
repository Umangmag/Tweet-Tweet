const express = require('express');
const connect = require('./config/db');
// const Tweet = require('./models/tweet');
// just use tweet repo instead of model

const TweetRepository= require('./repository/tweet-repository');
const Comment = require ('./models/comment');

const app= express();


app.listen(3000,async()=>
    {
        console.log("Server is running on port 3000");
        await connect();
        console.log('MongoDB connected');
        // const tweet = await Tweet.create({
        //     content: 'First tweet',
        //     userEmail: 'a@b.com'
        // });  
        
        // console.log(tweet);
        
        const tweetrepo = new TweetRepository();
        const tweet = await tweetrepo.create({content: "New tweet guys"});
        
        console.log(tweet);
    });

  