const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const generateFile = require("../childprocess/generateFile");
const executecode = require("../childprocess/executeFile");
const { body, validationResult } = require("express-validator");



router.post("/",fetchuser,async(req,res)=>{
try{
const {code,format} = req.body
const filepath = generateFile(code,format);
const output = await executecode(filepath);
res.json({
        "success":true,
        "filepath" : filepath,
        "output" : output  
});

}catch(err){
    res.json({"success":false,"err":err.message});
} 

});

module.exports = router;