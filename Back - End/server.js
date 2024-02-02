
const express = require('express')
const app = express();


app.get('/ping', (req,res) => {
    res.json({"message" : "pong!"})
})

app.listen(3000, ()=>{
    console.log(" Server is Listening and running on port 3000")
})

