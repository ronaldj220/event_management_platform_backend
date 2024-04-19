import mysql from "mysql2";

export default mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_event_management_platform",
});
