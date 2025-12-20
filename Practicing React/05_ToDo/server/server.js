const express =  require('express');
const dotenv =require('dotenv');

dotenv.config()
const port = process.env.PORT || 5000
const app = express();

app.get('/',(req,res)=>{
    res.send('server is Live')
})

app.listen(port , ()=>{
    console.log(`server is runing on PORT:${port}`)
})