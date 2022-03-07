const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')


const db = mysql.createPool({
    host:"109.94.209.66",
    user: "admin6247k",
    port: 3306,
    password: "lao6247K",
    database:"trainlist",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


/*==================== GET ROUTE ====================*/

app.get("/api/get", (req, res)=>{
    const sqlSelect= "SELECT * FROM list";
    db.query(sqlSelect, (err,result)=>{
        res.send(result); 
    });
});


/*==================== POST ROUTE ====================*/
app.post("/api/post", (req, res) => { 
    const city1 = req.body.city1;
    const city2 = req.body.city2;
    const departure = req.body.departure;
    const arrival = req.body.arrival;
    const sqlInsert = 
    " INSERT INTO list ( id, city1, city2, departure, arrival) VALUES ('9',?,?,?,?);";
    db.query(sqlInsert,[city1, city2, departure, arrival], (err, result)=> {
        res.send("Hello  world!!!");
        // console.log(result)
    });
});

/*==================== DELETE ROUTE ====================*/
app.delete("/api/delete/:arrival", (req,res)=>{
    const cityName = req.params.arrival
    const sqlDelete = "DELETE FROM list WHERE arrival = ?";
    db.query(sqlDelete, cityName, (err, result)=>{
        if (err) console.log(err);
    })


})

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

