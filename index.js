const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const loadTasksCollection = require("./tasklist");
const port = 5000;

// support parsing of application/json type post data
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/api/tasklist", require("./tasklist"));

app.listen(port, () => {
  console.log(`connect to port:${port}`);
});
