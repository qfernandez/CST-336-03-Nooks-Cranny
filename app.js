/* Require external APIs and start our application instance */
var express = require('express');
var mysql = require('mysql');
var bcrypt = require('bcrypt');
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
//Connection was intially lost a few seconds after starting node app.js
const pool = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b2a968485b2e2b',
    password: '2285bad0',
    database: 'heroku_f758c5b0e9a8469'
});
pool.query('select 1 + 1', (err, rows) => { /* */ });


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'adminUser',
//     password: 'adminPassword',
//     database: 'nookscranny'
// });
// connection.connect();

//routes
app.get("/", async function(req, res){
    let productList = await getProducts();
    res.render("index", {"productList":productList});
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/adminPage", async function(req, res){
    let productList = await getProducts();
    res.render("admin", {"productList":productList});
});

app.get("/registerPage", function(req, res){
    res.render("register");
});

app.get("/addproductPage", function(req, res){
    res.render("productAdd");
});

app.get("/results", async function(req, res){
    let rows = await getProds(req.query);
    res.render("results", {"products":rows});
});

//functions

//Originally was used to test to see if we could get Villagers
// function getVillagers(){
//     return new Promise(function(resolve, reject){
//           let sql = `SELECT *
//                         FROM villagers
//                         ORDER BY villagerName`;
//           pool.query(sql, function (err, rows, fields) {
//               if (err) throw err;
//               resolve(rows);
//           });
        
//     });//promise 
// }

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

//Originally was used to see if we could get Reviews
// function getReviews(){
//     return new Promise(function(resolve, reject){
//           let sql = `SELECT *
//                         FROM reviews
//                         NATURAL JOIN villagers NATURAL JOIN products
//                         ORDER BY productId`;
//           pool.query(sql, function (err, rows, fields) {
//               if (err) throw err;
//               resolve(rows);
//           });
        
//     });//promise 
// }

app.post('/villager/new', function(req, res){
  //console.log(req.body);
  pool.query('SELECT COUNT(*) FROM villagers;', function(error, result){
      if(error) throw error;
      if(result.length){
            var villagerId = result[0]['COUNT(*)'] + 1;
            var stmt = 'INSERT INTO villagers ' +
                       '(villagerId, villagerName, villagerPicture, villagerUserName, villagerPassword) '+
                       'VALUES ' +
                       '(' + 
                        villagerId + ',"' +
                        req.body.villagerName + '","' +
                        req.body.villagerPicture + '","' +
                        req.body.villagerUserName + '","' +
                        req.body.villagerPassword + '"' +
                        ');';
            console.log(stmt);
            pool.query(stmt, function(error, result){
                if(error) throw error;
                res.redirect('/');
            });
      }
  });
});



//Make new product
app.post('/product/new', function(req, res){
  //console.log(req.body);
  pool.query('SELECT COUNT(*) FROM products;', function(error, result){
      if(error) throw error;
      if(result.length){
            var productId = result[0]['COUNT(*)'] + 1;
            var stmt = 'INSERT INTO products ' +
                       '(productId, productName, productPicture, productDescription, productType, productPrice) '+
                       'VALUES ' +
                       '(' + 
                        productId + ',"' +
                        req.body.productName + '","' +
                        req.body.productPicture + '","' +
                        req.body.productDescription + '","' +
                        req.body.productType + '","' +
                        req.body.productPrice + '"' +
                        ');';
            console.log(stmt);
            pool.query(stmt, function(error, result){
                if(error) throw error;
                res.redirect('/adminPage');
            });
      }
  });
});

//Show Product
app.get('/product/:aid', function(req, res){
    var stmt = 'SELECT * FROM products WHERE productId=' + req.params.aid + ';';
    console.log(stmt);
    pool.query(stmt, function(error, results){
       if(error) throw error;
       if(results.length){
           var product = results[0];
           res.render('productInfo', {"product": product});
       }
    });
});


//Edit product
app.get('/product/:aid/edit', function(req, res){
    var stmt = 'SELECT * FROM products WHERE productId=' + req.params.aid + ';';
    pool.query(stmt, function(error, results){
       if(error) throw error;
       if(results.length){
           var product = results[0];
           res.render('productEdit', {"product": product});
       }
    });
});

//Update product
// app.put('/product/:aid', function(req, res){
//     console.log(req.body);
//     var stmt = 'UPDATE products SET ' +
//                 'productName = "'+ req.body.productName + '",' +
//                 'productPicture = "'+ req.body.productPicture + '",' +
//                 'productDescription = "'+ req.body.productDescription + '",' +
//                 'productType = "'+ req.body.productType + '",' +
//                 'productPrice = "'+ req.body.productPrice + '",' +
//                 'WHERE productId = ' + req.params.aid + ";";
//     console.log(stmt);
//     pool.query(stmt, function(error, result){
//         if(error) throw error;
//         res.redirect('/product/' + req.params.aid);
//     });
// });

app.put('/product/:aid', function(req, res){
    console.log(req.body);
    var stmt = `UPDATE products SET 
                productName = ?, 
                productPicture = ?, 
                productDescription = ?, 
                productType = ?, 
                productPrice = ? 
                WHERE productId = ?`;
    console.log(stmt);
    pool.query(stmt, function(error, result){
        if(error) throw error;
        res.redirect('/product/' + req.params.aid);
    });
});

// app.put('/author/:aid', function(req, res){
//     console.log(req.body);
//     var stmt = 'UPDATE l9_author SET ' +
//                 'firstName = "'+ req.body.firstname + '",' +
//                 'lastName = "'+ req.body.lastname + '",' +
//                 'dob = "'+ req.body.dob + '",' +
//                 'dod = "'+ req.body.dod + '",' +
//                 'sex = "'+ req.body.sex + '",' +
//                 'profession = "'+ req.body.profession + '",' +
//                 'portrait = "'+ req.body.portrait + '",' +
//                 'country = "'+ req.body.country + '",' +
//                 'biography = "'+ req.body.biography + '"' +
//                 'WHERE authorId = ' + req.params.aid + ";"
//     connection.query(stmt, function(error, result){
//         if(error) throw error;
//         res.redirect('/author/' + req.params.aid);
//     });
// });

//Search Query
function getProds(query){
    
    let keyword = query.keyword;
    
    return new Promise(function(resolve, reject){
           console.log("Connected!");
            
           let params = [];
            
           let sql = `SELECT *
                      FROM products
                      LEFT JOIN reviews
                      ON products.productId = reviews.productId 
                      LEFT JOIN villagers
                      ON reviews.villagerId = villagers.villagerId
                      WHERE productName LIKE '%${keyword}%' or productPrice LIKE '%${keyword}%' or productType LIKE '%${keyword}%'
                      ORDER BY productName`;
           console.log("SQL:", sql);
           pool.query(sql, params, function (err, rows, fields) {
              if (err) throw err;
              pool.end;
              resolve(rows);
           });
        
    });//promise
    
}

app.post('/loginFunction', function(req, res){
    var searchUser = 'SELECT * FROM villagers where (villagerUserName="' + req.body.villagerUserName +  '" AND villagerPassword="' +  req.body.villagerPassword + '");';
    pool.query(searchUser, function(error, result){
        if(error) throw error;
        if(result.length){
            
            if(req.body.villagerUserName == 'tnook'){
                res.redirect('/adminPage');
            } else {
                
                
            }
            
        }
    });
});


app.get('/product/:aid/delete', function(req, res){
    var stmt = 'DELETE from products WHERE productId='+ req.params.aid + ';';
    pool.query(stmt, function(error, result){
        if(error) throw error;
        res.redirect('/adminPage');
    });
});



// function isAuthenticated(req, res, next){
//     if(!req.session.authenticated) res.redirect('/login');
//     else next();
// }

// function checkUsername(username){
//     let stmt = 'SELECT * FROM villagers WHERE villagerUserName=?';
//     return new Promise(function(resolve, reject){
//       connection.query(stmt, [username], function(error, results){
//           if(error) throw error;
//           resolve(results);
//       }); 
//     });
// }

// function checkPassword(password, hash){
//     return new Promise(function(resolve, reject){
//       bcrypt.compare(password, hash, function(error, result){
//           if(error) throw error;
//           resolve(result);
//       }); 
//     });
// }

// app.post('/loginFunction', function(req, res){
//     let isUserExist   = await checkUsername(req.body.username);
//     let hashedPasswd  = isUserExist.length > 0 ? isUserExist[0].villagerPassword : '';
//     let passwordMatch = await checkPassword(req.body.password, hashedPasswd);
//     if(passwordMatch){
//         req.session.authenticated = true;
//         req.session.user = isUserExist[0].username;
//         res.redirect('/');
//     }
//     else{
//         res.render('login', {error: true});
//     }
// });

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Express server is running...");
});