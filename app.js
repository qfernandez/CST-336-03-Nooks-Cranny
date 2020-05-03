/* Require external APIs and start our application instance */
var express = require('express');
var mysql = require('mysql');
const app = express();

/* Configure our server to read public folder and ejs files */
app.use(express.static('public'));
app.set('view engine', 'ejs');
+app.engine('ejs', require('ejs').__express);

/* Configure MySQL DBMS */
const connection = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b2a968485b2e2b',
    password: '2285bad0',
    database: 'heroku_f758c5b0e9a8469'
});
connection.connect();

//routes
app.get("/", async function(req, res){
    res.render("index");
});

// function dbConnection(){

//   let conn = mysql.createConnection({
//                  host: "us-cdbr-east-06.cleardb.net",
//                  user: "b2a968485b2e2b",
//              password: "2285bad0",
//              database: "heroku_f758c5b0e9a8469"
//       });

// return conn;

// }

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Express server is running...");
});