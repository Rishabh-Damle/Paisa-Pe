import express from "express";
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hi there");
});

app.listen(3000);
