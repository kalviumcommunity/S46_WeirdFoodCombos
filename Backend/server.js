
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors'); 
const routes = require('./routes')
const cookieParser = require('cookie-parser')
require('dotenv').config();

const mongoURI = process.env.mongoURI
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))
db.once('open', () => {
    console.log("Connected to MongoDB using Mongoose")
})


app.use(cors());
app.use(express.json());
app.use('/', routes);
app.use(cookieParser());


app.get('/', (req,res) => {
    if(db.readyState === 1){
        res.send("Connected to MongoDB Successfully")
    }
    else{
        res.send("Failed to connect to MongoDB")
    }
})

app.listen(3000, ()=>{
    console.log(" Server is Listening and running on port 3000")
})

