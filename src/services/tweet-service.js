// Business logic comes here in service layer

// suppose in req you got data you want to create tweet so u could use tweetrepo to create tweet but you have to extract hashtags thast business logic that will come in service layer
// first extract hashtags then calll that create func of tweet repo

const {TweetRepository,HashtagRepository}= require('../repository/index')

 class TweetService {
     constructor(){
        this.TweetRepository= new TweetRepository();
        this.HashtagRepository=new HashtagRepository();
     }

      async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z 0-9_]+/g);
        // this will take content of tweet and return words starting from # in array  
        
        // you will get array containng hashtags but starting from # remove this #

        tags= tags.map((tag)=>{
            tag.substring(1);
        });

        console.log(tags);

        // now take these tags and see if these tags are present in database in hashtag model or not

        const alreadyPresentTags= this.HashtagRepository.findByName(tags);

        //tomorrow continue from here you check and got already presemt tags now those which are not presemt please add

        const tweet = await this.TweetRepository.create(data);
        // todo create hashtags and add here

        // 1. bulkcreate in mongoose
        // 2. filter title of hashtags based on multiple tags
        // 3. how to  add tweet id inside all the hashtags

         return tweet;
     }
 }

  module.exports= TweetService;