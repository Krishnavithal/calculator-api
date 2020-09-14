const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

// here
app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.post("/add", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (typeof a == "string" || typeof b == "string") {
    return res.json({
      status: "failure",
      message: "Invalid data types",
    });
  }
  const result = a + b;
  if (a > 1000000 || b > 1000000 || result > 1000000) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  return res.json({
    status: "success",
    message: "the sum of given two numbers",
    sum: result,
  });
});

app.post("/sub", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (typeof a == "string" || typeof b == "string") {
    return res.json({
      status: "failure",
      message: "Invalid data types",
    });
  }
  const result = a - b;
  if (result < -1000000) {
    return res.json({
      status: "error",
      message: "Underflow",
    });
  }
  return res.json({
    status: "success",
    message: "the difference of given two numbers",
    difference: result,
  });
});

app.post("/multiply", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (typeof a == "string" || typeof b == "string") {
    return res.json({
      status: "failure",
      message: "Invalid data types",
    });
  }
  const result = a * b;
  if (result > 1000000) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  return res.json({
    status: "success",
    message: "The product of given numbers",
    result: result,
  });
});

app.post("/divide", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (typeof a == "string" || typeof b == "string") {
    return res.json({
      status: "failure",
      message: "Invalid data types",
    });
  }
  if (b === 0) {
    return res.json({
      status: "error",
      message: "Cannot divide by zero",
    });
  }
  const result = a / b;

  if (result > 1000000) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  return res.json({
    status: "success",
    message: "The division of given numbers",
    result: result,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
