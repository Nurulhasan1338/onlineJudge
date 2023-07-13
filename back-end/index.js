
const PORT = 3000;
const connectToMongo = require('./db');
const cors = require('cors')
const express = require('express')
connectToMongo();  
const app = express()

app.use(cors(
    {
        origin : ["https://my-note-backend-c31y.vercel.app"],
        methods : ["POST","GET","PUT","DELETE"],
        credentials:true

    }
));

app.use(express.json());
 
app.use('/auth',require('./routes/auth'));
app.use('/run',require('./routes/runcode'));

app.get('*',(req,res,next)=>{
  res.status(200).json({
    message:'connected successfully'
  })

  
})

app.listen(PORT,()=>{
  console.log(`sever is listening at :https://localhost:${PORT}`);
});



