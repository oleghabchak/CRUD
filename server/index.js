const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyparser = require('body-parser');


const db = mysql.createPool({
    host:"localhost",
    user: "root",
    password: "lao6247K",
    database:"cruddb",
});

app.get("/", (req, res) => { 
    const sqlInsert = 
    " INSERT INTO cruddb.train ( id, city1, city2, departure, arrival) VALUES ('3','Lutsk','IF', '12:45', '20:54');";
    db.query(sqlInsert, (err, result)=> {
        res.send("Hello  world!!!");
        console.log(err)
    });
});

app.listen(3005, () => {
    
    console.log('running... on port 3005');
});


///////////////////////////////////////////////////////////////////////////////////////////////////////
// const express = require('express');
// const app = express();
// const mysql = require('mysql');
// const bodyparser = require('body-parser');

// app.use(bodyparser.json)


// const mysqlConnection = mysql.createConnection({
//     host:"localhost",
//     user: "root",
//     password: "lao6247K",
//     database:"cruddb",
// });

// mysqlConnection.connect(err => {
//     if (err){ console.log(err); 
//         return err;
//     }
//     else {
//     console.log('DataBase---OK');
//     }
       
// });  

// let query ='SELECT * FROM cruddb.train'
//     mysqlConnection.query(query,(err, result, field) => {
//         console.log(err);
//         console.log(result);
        
       
//     })

