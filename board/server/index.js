const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const PORT = process.env.port ||8000;

const bodyParser = require("body-parser")


const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "1234",
    database : "bbs",
});

let corsOptions = {
    origin : "*",
    credential : true,
};

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use (cors(corsOptions));

app.get("/",(req,res)=>{
    const sqlQuery = "INSERT INTO requested (rowno) VALUES (1)";
    db.query(sqlQuery,(err,result)=>{
        res.send("success!");
    });
});

app.get("/list",(req,res)=>{
    const sqlQuery="SELECT BOARD_ID, BOARD_TITLE,REGISTER_ID,DATE_FORMAT(REGISTER_DATE,'%Y-%m-%d') AS REGISTER_DATE FROM BOARD;";
    db.query(sqlQuery,(err,result)=>{
        res.send(result);
    });
});


app.get("/list", (req,res)=>{
    const sqlQuery = "SELECT * FROM BOARD;";
    db.query(sqlQuery,(err,result)=>{
        res.send(result);
    });
});

app.post("/delete", (req,res)=>{
    const id = req.body.boardIdList;

    const sqlQuery = `DELETE FROM BOARD WHERE BOARD_ID IN (${id})`;
    db.query(sqlQuery,(err,result)=>{
        res.send(result);
    });
});

app.post("/insert",(req,res)=>{
    var title = req.body.title;
    var content = req.body.content;

    const sqlQuery = "insert into BOARD(BOARD_TITLE, BOARD_CONTENT, REGISTER_ID) values(?,?,'artistGay');";
    db.query(sqlQuery, [title,content],(err,result)=>{
        res.send(result);
    });
});

app.post("/update",(req,res)=>{
    var title = req.body.title;
    var content = req.body.content;

    const sqlQuery =
    "UPDATE BOARD SET BOARD_TITE = ?, BOARD_CONTENT = ?, UPDATER_ID) FROM (?,?,artistGay);";
    db.query(sqlQuery,[title,content],(err,result) => {
        res.send(result);
    });
});

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
});



// const express = require('express');
// const app = express ();
// const PORT = process.env.port || 8000;

// app.get("/", (req,res)=>{
//     console.log("requested.");
// });

// app.listen(PORT,() =>{
//     console.log(`running on port ${PORT}`);
// });