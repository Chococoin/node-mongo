const express = require('express');
const mongoose = require('mongoose');
const graphHTTP = require('graphql-request'); 
const query = require('./Query'); 

const app = express();

const mongo_url = "mongodb://tony:test123@ds143293.mlab.com:43293/github-scrawler" 

mongoose.connect(mongo_url, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
	console.log('Mongodb Connected')
})

app.get('/', function(req, res){
	console.log('Connect');
	res.send(query);
	res.end()
});

app.listen(4000, console.log('Connected'))
