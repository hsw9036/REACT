const express = require('express');
const bcrypt = require('bcryptjs');
const db = require ('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require ( 'jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.post('/login', (req,res) =>{
//     const {email,password} = req.body;
// })

// app.post('/register' , async (req,res ) => {
//     const {username, email, password} = req.body;

// const hashedPassword = await bcrypt.hash(password, 10);

// const sql = 'SELECT * FROM Users WHERE email = ?';
// db.query (sql, [email], async (err, results) =>{
//     if (err) return res.status (500).json ({ error : "데이터베이스 에러"});
//     if (results.length === 0) return res.status(401).json ({error : "사용자를 찾을 수 없습니다."});
//     const user = results[0];    
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) return res.status(401).json({ error: "비밀번호가 일치하지 않습니다." });

//         const token = jwt.sign({ id: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });

//         res.status(200).json({ message: "로그인 성공!", token });
// })})

// const sql = 'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)';
//     db.query(sql, [username, email, hashedPassword], (err, result) => {
//         if (err) return res.status(500).json({ error: "데이터베이스 에러" });
//         return res.status(201).json({ message: "회원가입 성공!" });
//     });


app.listen(5000, () => {
    console.log("서버가 포트 5000에서 실행 중입니다.");
})

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const sqlCheck = 'SELECT * FROM Users WHERE email = ?';
    db.query(sqlCheck, [email], (err, results) => {
      if (err) return res.status(500).json({ error: "데이터베이스 에러" });
      if (results.length > 0) return res.status(400).json({ error: "이메일이 이미 존재합니다." });
  
      // 새로운 사용자 추가
      const sqlInsert = 'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)';
      db.query(sqlInsert, [username, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ error: "데이터베이스 에러" });
        return res.status(201).json({ message: "회원가입 성공!" });
      });
    });
  });

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM Users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: "데이터베이스 에러" });
        if (results.length === 0) return res.status(401).json({ error: "사용자를 찾을 수 없습니다." });

        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ error: "비밀번호가 일치하지 않습니다." });

        const token = jwt.sign({ id: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });
        res.status(200).json({ message: "로그인 성공!", token });
    });
});
