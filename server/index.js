const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:"localhost",
    uset: "root",
    password: "lao6247K",
    database:"cruddb",
});



app.get( "/", (req, res) => {
    const sqlInsert = 
    " INSERT INTO trains (City, Route1) VALUES ('1','1');";
    db.query(sqlInsert, (err, result)=> {
        res.send("Hello  world!!!");
    });
});

app.listen (3005, () => {
    console.log('running... on port 3005');
});