const express = require('express');

const app = express();

const morgab('morgan');

const mysql =require('mysql')



app.use(morgan('combined'));


app.get("/", (req,res) =>{

console.log("It is responding");

})

const connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	database: 'harshaDB',



})

connection.query("select *.......")

app.get("/users", (req,res) =>{

var user1 = {firstname: "harsha"};
res.json(user1);


})
