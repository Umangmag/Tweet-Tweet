const Hashtag = require('../models/hashtags');

class HashtagRepository{
    async create(data){
             try {
                const tag = await Hashtag.create(data);
                return tag;
            } catch (error) {
                console.log(error);  
            }
    }

    async bulkCreate(data){ // data is array of objects
          try {
                 const tags= await Hashtag.insertMany(data);
          } catch (error) {
                console.log(error)
          }
    }

    async get(id){
        try {
            const tag = await Hashtag.findById(id);
            return tag;
            } 
         catch (error) {
            console.log(error);  
         }
    }


    async destroy(id){

        try {
            const response = await Hashtag.findByIdAndDelete(id);
            return response;
           } 
         catch (error) {
            console.log(error);  
         }
    }

    async findByName(titleList){
        try {
             const tags= await Hashtag.find({
                title: titleList
             }).select('title');
            
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports= HashtagRepository;
