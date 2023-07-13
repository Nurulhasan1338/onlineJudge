const mongose =require('mongoose');
const { Schema } = mongose;
const NoteSchema = new Schema({
    
   user:{
        // this will act as forign key as userid is from user collection and this is how we mention comman data. 
        type:mongose.Schema.Types.ObjectId, // as the type will be objectid
        ref : "user"  //  from which collection user id will come
   },
   title:{
       type:String,
       required:true
   },
   description:{
       type:String,
       required:true
   },
   tag:{
       type:String,
       default:"General"
   },
   date:{
       type:Date,
       required:true,
       default:Date.now
   },
   color:{
    type:String,
    required:true
   }
  });

module.exports = mongose.model('note',NoteSchema);
