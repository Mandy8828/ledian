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
app.get("/branch/:id", function (req, res) {
  conn.query(
    "select * from branch where brand_id = ?",
    [req.params.id],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});
app.get("/brand/:id", function (req, res) {
  conn.query(
    "select * from brand where brand_id = ?",
    [req.params.id],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

// 全部飲料
app.get("/all/products", function (req, res) {
  conn.query("select * from products", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

app.get("/all/brand", function (req, res) {
  conn.query("select * from brand", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

// 店家部分-全部
app.get("/dian/address", function (req, res) {
  conn.query("select * from branch", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

// 店家部分-地區
app.get("/dian/address_400", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 400",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_401", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 401",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_402", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 402",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_403", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 403",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_404", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 404",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_406", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 406",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_407", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 407",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_408", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 408",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_411", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 411",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_412", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 412",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_413", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 413",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_414", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 414",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_420", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 420",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_421", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 421",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_422", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 422",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_423", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 423",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_426", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 426",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_427", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 427",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_428", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 428",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_429", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 429",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_432", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 432",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_433", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 433",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_434", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 434",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_435", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 435",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_436", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 436",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_437", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 437",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/address_438", function (req, res) {
  conn.query(
    "select * from branch where branch_postcode = 438",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

// 店家部分-評分(全)
app.get("/dian/scoreall", function (req, res) {
  conn.query("select * from branch", function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

// 店家部分-評分
app.get("/dian/score_4.5", function (req, res) {
  conn.query(
    "select * from branch where branch_score between 4.5 and 5.0 ",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/score_4.0", function (req, res) {
  conn.query(
    "select * from branch where branch_score between 4.0 and 5 ",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/score_3.5", function (req, res) {
  conn.query(
    "select * from branch where branch_score between 3.5 and 5 ",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/dian/score_3.0", function (req, res) {
  conn.query(
    "select * from branch where branch_score between 3.0 and 5 ",
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});
