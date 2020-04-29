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
    host: 'localhost',
    user: 'q',
    password: 'q',
    database: 'quotes_db'
});
connection.connect();

//routes
app.get("/", async function(req, res){
    res.render("index");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Express server is running...");
});