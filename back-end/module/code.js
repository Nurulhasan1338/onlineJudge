const mongose =require('mongoose');
const { Schema } = mongose;
const Code = new Schema({
    
   user:{
        // this will act as forign key as userid is from user collection and this is how we mention comman data. 
        type:mongose.Schema.Types.ObjectId, // as the type will be objectid
        ref : "user"  //  from which collection user id will come
   },
   code:{
       type:String,
       required:true
   },
   verdict:{
       type:String,
       required:true
   },
    problem:{
        type:mongose.Schema.Types.ObjectId, // as the type will be objectid
        ref : "problems"  //  from which collection user id will come
   },
   date:{
       type:Date,
       required:true,
       default:Date.now
   },
  });

module.exports = mongose.model('note',NoteSchema);
