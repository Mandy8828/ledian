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

app.get("/le1/product", function (req, res) {
  conn.query(
    "select product_img, product_id, product_name, products_price_0, products_price_1, brand_id from products where product_class_1 = 1",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/le1/brand", function (req, res) {
  conn.query("select * from brand", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

// app.get("/todo/item/:id", function (req, res) {
//     conn.query("select * from todoTable where todoTableId = ?",
//         [req.params.id],
//         function (err, rows) {
//             res.send( JSON.stringify(rows[0]) );
//         }
//     )
// })

// app.post("/todo/create", function (req, res) {
//     conn.query("insert into todoTable (title, isComplete) values (?, ?)",
//         [req.body.title, req.body.isComplete],
//         function (err, rows) {
//             res.send( JSON.stringify( req.body ));
//         }
//     )

// })

// app.put("/todo/item", function (req, res) {
//     conn.query("update todoTable set title= ?, isComplete = ? where todoTableId = ?",
//         [req.body.title, req.body.isComplete, req.body.todoTableId],
//         function (err, rows) {
//             res.send( JSON.stringify( req.body ));
//         }
//     )

// })

// app.delete("/todo/delete/:id", function (req, res) {
//     conn.query("delete from todoTable where todoTableId = ?",
//         [req.params.id],
//         function (err, rows) {
//             res.send("#" + req.params.id + " deleted");
//         }
//     )
// })
