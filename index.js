const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
// //create database connection
// const conn = mysql.createConnection({
//   host: 'https://databases-auth.000webhost.com',
//   user: 'id9284416_root',
//   password: '12345',
//   database: 'id9284416_mdm'
// });
 
// //connect to database
// conn.connect((err) =>{
//   if(err) throw err;
//   console.log('Mysql Connected...');
// });
 
//show all products
// app.get('/mdm/api/subscribers',(req, res) => {
//   let sql = "SELECT * FROM dm_messenger_subscribers";
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 

app.get('/mdm/api/test',(req, res) => {

   res.send(JSON.stringify({"status": 200, "error": null, "response": "test"}));

});

//show single product
// app.get('/api/products/:id',(req, res) => {
//   let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
// // add new product
// app.post('/mdm/api/subscribers/add',(req, res) => {

//    console.log(req.body);

//   let data = {
//         fb_id: req.body.fb_id
//       };

//   let sql = "INSERT INTO dm_messenger_subscribers SET ?";

//   let query = conn.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
//update product
// app.put('/api/products/:id',(req, res) => {
//   let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
//Delete product
// app.delete('/api/products/:id',(req, res) => {
//   let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});