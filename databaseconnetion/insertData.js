const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "INSERT INTO studentinfo (name, rollNo, address) VALUES ('Zaheer', '180934', 'Atd')";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("1 Record inserted...");
  });
});
