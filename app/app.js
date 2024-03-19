var express = require("express");
var cors = require("cors");
var app = express();
app.listen(8000);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var mysql = require("mysql");
var conn = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  port: 3306,
  database: "lediandata",
});

conn.connect(function (err) {
  console.log(err);
});

app.get("/index/branch", function (req, res) {
  conn.query("select * from branch", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});
app.get("/index/brand", function (req, res) {
  conn.query("select * from brand", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});
app.get("/index/products", function (req, res) {
  conn.query(
    "select product_name, product_img, brand_id from products where product_img != '無' and product_class_1 = 1",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

// 飲料部分
app.get("/le1/product", function (req, res) {
  conn.query(
    "select product_img, product_id, product_name, products_price_0, products_price_1, brand_id from products where product_class_1 = 1",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/le/brand", function (req, res) {
  conn.query("select * from brand", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

app.get("/le2/product", function (req, res) {
  conn.query(
    "select product_img, product_id, product_name, products_price_0, products_price_1, brand_id from products where product_class_2 = 1",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/le3/product", function (req, res) {
  conn.query(
    "select product_img, product_id, product_name, products_price_0, products_price_1, brand_id from products where product_class_3 = 1",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/le4/product", function (req, res) {
  conn.query(
    "select product_img, product_id, product_name, products_price_0, products_price_1, brand_id from products where product_class_4 = 1",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/le5/product", function (req, res) {
  conn.query(
    "select product_img, product_id, product_name, products_price_0, products_price_1, brand_id from products where product_class_5 = 1",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

// 店家部分-附近店家
// 店家部分-評級4以上(星評優選)
// 店家部分-地區
// 店家部分-評分
