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

  // Query for Get data from database
  con.query("select * from studentinfo", (err, result) => {
    if (err) throw err;
    const res = result.map((rec) => {
      // get every single data from array through map() method
      return rec;
    });
    console.log(res);
  });
});
