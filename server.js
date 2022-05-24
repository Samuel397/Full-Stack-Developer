const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require ('cors');
const path = require('path');
const mongoose = require ('mongoose');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('link-conexão',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function(err){
    if(err){
        console.log(err);
    }else {
        console.log('MongoDB CONECTADO com sucesso!')
    }
})

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.get('/', function(req, res){
    res.json({mensage: "Hello"});
})

app.listen(port, function(){
    console.log('Server runing on port ${port}')
})