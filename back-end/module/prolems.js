const mongose =require('mongoose');
const { Schema } = mongose;
const Code = new Schema({
    
   pname:{
       type:String,
       required:true
   },
   difficulty:{
       type:String,
       required:true
   },
    description:{
        type:String,
        require:true
   },
   testcase:{
    type:String,
    require:true
   },
   date:{
       type:Date,
       required:true,
       default:Date.now
   },
  });

module.exports = mongose.model('note',NoteSchema);
