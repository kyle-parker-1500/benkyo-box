import express from 'express';
import mysql from 'mysql2/promise';
import { loadEnvFile } from 'node:process';
import { flashcard } from './benkyobox_library/flashcard.mjs';

loadEnvFile();
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

//for Express to get values using the POST method
app.use(express.urlencoded({extended:true}));

//setting up database connection pool, replace values in red
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    connectionLimit: 10,
    waitForConnections: true
});

//routes
app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.use(express.urlencoded({ extended: true }));

// updating db with flashcard information
app.post('/submit-card', async (req, res) => {
    const {
        question,
        questionSrc,
        questionAlt,
        answer,
        answerSrc,
        answerAlt
    } = req.body;
    
    // pass to db
    try {
        let sql = 'INSERT INTO cards (question, questionSrc, questionAlt, answer, answerSrc, answerAlt) VALUES (?, ?, ?, ?, ?, ?)';
        await pool.query(sql, [question, questionSrc, questionAlt, answer, answerSrc, answerAlt]);
        res.json({ question, questionSrc, questionAlt, answer, answerSrc, answerAlt });
    } catch (err) {
        console.log("Error updating db");
        res.status(500).send('Database error');
    }
});

// dbTest
app.get("/dbTest", async(req, res) => {
   try {
        const [rows] = await pool.query("SELECT CURDATE()");
        res.send(rows);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Database error!");
    }
});

// check db values
app.get("/dbValues", async (req, res) => {
    try {
        const [users] = await pool.query("SELECT * FROM Users");
        res.send(users);

    } catch (err) {
        console.error("Database error: ", err);
        res.status(500).send("Database error!");
    }
});

app.listen(3000, ()=>{
    console.log("Express server running")
})