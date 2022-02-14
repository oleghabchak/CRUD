const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: "109.94.209.66",
  port:3306,
  user: "admin6247k",
  password: "lao6247K",
  database:"trainlist"
});
pool.getConnection()
    .then(conn => {
    
      conn.query("SELECT 1 as val")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          //Table must have been created before 
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          return conn.query("INSERT INTO myTable value (?, ?)", [7, "soka"]);
        })
        
       
        
    }).catch(err => {
      console.log(err);
    });