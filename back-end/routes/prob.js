const express = require("express");
const router = express.Router();
const Code = require("../module/Code")


router.post("/createprob",async (req, res) => {
      let Success = false;
  
      try {
        // adding data to the collection
        user = await Code.create({
          name: req.body.name,
          difficulty: req.body.difficulty,
          code: req.body.code,
          description : req.body.description,
          expec_out:req.body.expec_out
        });
        
        Success=true;
        res.json({"success":Success,"message":"problem added"});
  
      } catch (error) {
        // this is used to catch error which is in the try block
        console.error(error.messsage);
        res.status(500).json({"success":Success, error: "some error occured" });
      }
    }
  );

  router.get("/fetchprobs", async (req, res) => {
    try {

 const notes = await Code.find();
 if(notes.length!==0){
  res.json({"success":true,"data":notes});
 }
 else{
  res.json({"success":false,"msg":"no problem"});
 }
}  catch (error) {
    console.error(error);
    res.status(500).send("some internal error");
}
});

  router.post("/fetchprob", async(req, res) => {
    try {

 const notes = await Code.find({_id:req.body.id});
 if(notes.length!==0){
  res.json({"success":true,"data":notes});
 }
 else{
  res.json({"success":false,"msg":"no problem"});
 }
}  catch (error) {
    console.error(error);
    res.status(500).send("some internal error");
}
});

module.exports = router;