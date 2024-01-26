import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "127.0.0.1",

  //Username
  user: "root",

  //Password
  password: "BenBerk85",
  database: "Finn27!"
});

connection.connect(function (err) {
  if (err) throw err;
});

export default connection;