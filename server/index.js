const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyparser = require('body-parser');

app.use(bodyparser.json)


const mysqlConnection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "lao6247K",
    database:"cruddb",
});

mysqlConnection.connect(err => {
    if (err){ console.log(err); 
        return err;
    }
    else {
    console.log('DataBase---OK');
    }
       
});  

let query ='SELECT * FROM cruddb.train'
    mysqlConnection.query(query,(err, result, field) => {
        console.log(err);
        console.log(result);
        
        // console.log(field);
    })

// app.listen(3001,()=> console.log('Express serwer is running at port: 3001'));

// app.get('/train',(res,req) =>{
//     mysqlConnection.query('SELECT * FROM cruddb.trains',(err, rows, fields)=>{
//         if(!err)
//         console.log(rows);
//         else 
//         console.log(err);
//     });
// });




// app.get( "/", (req, res) => {
    
//     const sqlInsert = 
//     " INSERT INTO trains (City, Route1) VALUES ('1','1');";
//     db.query(sqlInsert, (err, result)=> {
//         res.send("Hello  world!!!");
//     });
// });

// app.listen (3005, () => {
//     console.log('running... on port 3005');
// });