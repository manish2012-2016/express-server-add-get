var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mynodedb"
  });

  

router.get('/',(req,res,next) => {
    
    // console.log(req.body);
    // console.log(req.body.username);
    // next();
    
    // con.connect();
getAllResult(res);

// con.end();
  
})

function getAllResult(res){

  let sql = "SELECT * From students";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.status(200).send({message :'users reterived successfully',
                         data:result});
                      
  });
}

module.exports = router;
