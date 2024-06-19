const express = require("express");
const cors = require('cors');
const app = express();
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const saltRound = 10;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const RequirementUS = require("./RequirementUS");

app.use (
    session ({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
        },
    })
);
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database:'valagile',
    multipleStatements: true 
 });
 db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});


app.get('/', (req, res) => {
    res.json({ message: "Hello from server!" });
});


app.post("/register", (req, res)=> {
    const { firstname, lastname, email, password} = req.body;
    bcrypt.hash(password,saltRound, (err, hash) => {
        if (err) {
            console.log(err)
        }
    db.query(
        "INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?,?,?)",
        [firstname, lastname, email, hash],
        (err, result)=> {
            if (err) {
                console.error('Error registering user:', err);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            console.log('User registered successfully:', result);
            res.status(200).json({ message: 'User registered successfully' });
        }
    );
});
});

app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("Logout successful");
});
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    req.session.email = email;
    db.execute(
        "SELECT * FROM users WHERE email = ?;",
        [email],
        (err, result)=> {
            if (err) {
                console.log("enneerr",err)
                res.send({err: err});
            }
            if (result.length > 0) {
                 bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        console.log("req.session.user",req.session.user);
                        res.send(result);
                    } else{
                        res.send({message: "User doesn't exists"}); 
                    }
                });
            }
            else{
                    res.json({ message: "Wrong username/password combination!" });
                } 
            }
    );
});

app.get('/RequirementUS',(req, res) => {
    RequirementUS(req, res,db);
});
app.post('/RequirementUS', (req, res) => {
    RequirementUS(req, res,db);
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });

module.exports = db;