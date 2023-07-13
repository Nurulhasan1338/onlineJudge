const mongose =require('mongoose');
const { Schema } = mongose;
const Code = new Schema({
    
   name:{
       type:String,
       required:true
   },
   code:{
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
   expec_out:{
    type:String,
    require:true
   },
   date:{
       type:Date,
       required:true,
       default:Date.now
   },
  });

module.exports = mongose.model('code',Code);
