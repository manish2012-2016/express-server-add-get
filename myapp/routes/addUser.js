var express = require('express');
var router = express.Router();
var mysql = require('mysql');



var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mynodedb"
  });


router.post('/',(req,res,next) => {
    
    console.log(req.body);
    console.log(req.body.username);
    let name = req.body.username;
let myvalue = req.body.myvalue;
addData(name,myvalue,res);
// console.log(name);
   
})

function addData(myName ,myvalue,res){
  let sql = "INSERT INTO students (name, address) VALUES ('"+myName+"', '"+myvalue+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    
    res.status(200).send({message :'succesfully added user'})
  });
}

module.exports = router;
