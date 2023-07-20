const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const generateFile = require("../childprocess/generateFile");
const executecode = require("../childprocess/executeFile");
const Prob = require("../module/Code") 



// this route is used for only running the code and giving the output
router.post("/runcode",async(req,res)=>{
    try{
    const {code,format,input} = req.body;

    const filepath = generateFile(code,format);


    

    const output = await executecode(filepath,input);

    if(output){ 
        res.json({
                "success":true,
                "verdict" : "code is running Successfully",
                "output":output
        });
        }else{
            res.json({
                "success":false,
                "verdict" :"code in not running",
                "output":output
        });
        }
    }catch(err){
        res.json({"success":"false","err":err})
    }
});


router.post("/submit",fetchuser,async(req,res)=>{
try{
const {code,format,input,p_name} = req.body;
const filepath = generateFile(code,format);

// with the help of problem name we are able to fetch all information of the problem
const problem = await Prob.findOne({name:p_name});

// ecxecuting the correct code with the given input to find expected output
const testpath = generateFile(problem.code,format);


const testoutput = await executecode(testpath,input)
const output = await executecode(filepath,input);

if(output===testoutput){ 
res.json({
        "success":true,
        "verdict" : "Code Accepted",
        "your input":output,
        "expected output":testoutput

});
}else{
    res.json({
        "success":false,
        "verdict" : "Wrong Answer",
        "your input":output,
        "expected output":testoutput
});
}

}catch(err){
    res.json({"success":false,"err":err.message});
} 


});

module.exports = router;