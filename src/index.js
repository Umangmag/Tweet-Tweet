const express = require('express');
const connect = require('./config/db');

// const Tweet = require('./models/tweet');
// just use tweet repo instead of model

const HashtagRepository= require('./repository/hashtag-repository');
const Comment = require ('./models/comment');

const app= express();


app.listen(3000,async()=>
    {
        console.log("Server is running on port 3000");
        await connect();
        console.log('MongoDB connected');
    });

  