/* Require external APIs and start our application instance */
var express = require('express');
var mysql = require('mysql');
const app = express();

/* Configure our server to read public folder and ejs files */
app.use(express.static('public'));
app.set('view engine', 'ejs');
+app.engine('ejs', require('ejs').__express); //Wouldn't initally read ejs so I had to install this
app.use(express.urlencoded()); //Used to parse data sent using the POST method

/* Configure MySQL DBMS */
// const connection = mysql.createConnection({
//     host: 'us-cdbr-east-06.cleardb.net',
//     user: 'b2a968485b2e2b',
//     password: '2285bad0',
//     database: 'heroku_f758c5b0e9a8469'
// });
// connection.connect();

//Used Pool since I was getting some connection errors 
//Connection was lost a few seconds after starting node app.js
const pool = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b2a968485b2e2b',
    password: '2285bad0',
    database: 'heroku_f758c5b0e9a8469'
});
pool.query('select 1 + 1', (err, rows) => { /* */ });

//routes
app.get("/", async function(req, res){
    let villagerList = await getVillagers();
    let productList = await getProducts();
    let reviewList = await getReviews();
    res.render("index", {"villagerList":villagerList,"productList":productList,"reviewList":reviewList});
});

app.get("/login", function(req, res){
    res.render("login");
});

//functions
function getVillagers(){
    return new Promise(function(resolve, reject){
           let sql = `SELECT *
                        FROM villagers
                        ORDER BY villagerName`;
           pool.query(sql, function (err, rows, fields) {
              if (err) throw err;
              resolve(rows);
           });
        
    });//promise 
}

function getProducts(){
    return new Promise(function(resolve, reject){
           let sql = `SELECT *
                        FROM products
                        ORDER BY productName`;
           pool.query(sql, function (err, rows, fields) {
              if (err) throw err;
              resolve(rows);
           });
        
    });//promise 
}

function getReviews(){
    return new Promise(function(resolve, reject){
           let sql = `SELECT *
                        FROM reviews
                        NATURAL JOIN villagers NATURAL JOIN products
                        ORDER BY productId`;
           pool.query(sql, function (err, rows, fields) {
              if (err) throw err;
              resolve(rows);
           });
        
    });//promise 
}



//starting server
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Express server is running...");
});