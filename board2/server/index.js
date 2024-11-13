const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;
const cors = require ('cors');
const bodyParser = require("body-parser");

let corsOptions = {
    origin : "*",
    credential : true,
};

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(cors(corsOptions));



const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "1234",
    database : "bbs1",
});


// app.get("/list",(req,res)=>{
//     const sqlQuery ="SELECT BOARD1_ID, BOARD1_TITLE, DATE_FORMAT(REGISTER_DATE, '%Y-%m-%d') AS REGISTER_DATE FROM BOARD1;";
//     db.query(sqlQuery,(err,result) =>{
//         res.send(result);
//     });
    
// });


app.get("/",(req,res)=>{
    const sqlQuery = "INSERT INTO requested (rowno) VALUES (1)";
    db.query(sqlQuery, (err, result)=>{
        res.send("success!!");
    });
});

app.get("/list", (req,res)=>{
    const sqlQuery = "SELECT * FROM BOARD1;";
    db.query(sqlQuery,(err,result) =>{
        res.send(result);
    });
});

app.post("/insert", (req,res)=>{
    var title = req.body.title;
    var content = req.body.content;

    const sqlQuery =
    "insert into BOARD(BOARD_TITLE, BOARD_CONTENT,REGISTER_ID) values(?,?,'artistJay');";
    db.query(sqlQuery,[title,content],(err,result)=>{
        res.send(result);
    });
});

app.post("/update", (req,res)=>{
    var title = req.body.title;
    var content = req.body.content;

    const sqlQuery =
    "UPDATE BOARD SET BOARD_TITLE=?,BOARD_CONTENT=?,UPDATER_ID) FROM (?,?,artistJay);";
    db.query(sqlQuery,[title,content],(err,result)=>{
        res.send(result);
    });
});


app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
});




// const express = require('express')
// const app = express();
// const PORT = process.env.port || 8000;


// app.get("/",(req,res) => {
//     console.log("requested.");
// });


// app.listen(PORT, () => {
//     console.log (`running on port ${PORT}`);
// });