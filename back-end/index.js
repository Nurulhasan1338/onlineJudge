
const PORT = 5000;
const connectToMongo = require('./db');
const cors = require('cors')
const express = require('express')
connectToMongo();  
const app = express()

app.use(cors());

app.use(express.json());
 
app.use('/api/auth',require('./routes/auth'));
app.use('/api/run',require('./routes/runcode'));
app.use('/api/add',require('./routes/prob'));

app.get('*',(req,res,next)=>{
  res.status(200).json({
    message:'connected successfully'
  })

  
})

app.listen(PORT,()=>{
  console.log(`sever is listening at :https://localhost:${PORT}`);
});



