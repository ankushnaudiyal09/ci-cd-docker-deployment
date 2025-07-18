const express = require("express");
const app = express();

let tasks = [
  { id: 1, title: "Learn Docker", completed: false },
  { id: 2, title: "Set up CI/CD", completed: false },
  { id: 3, title: "Deploy to production", completed: false },
  { id: 1, title: "Learn Docker", completed: false },
  { id: 2, title: "Set up CI/CD", completed: false },
  { id: 3, title: "Deploy to production", completed: false },
  { id: 1, title: "Learn Docker", completed: false },
  { id: 2, title: "Set up CI/CD", completed: false },
  { id: 3, title: "Deploy to production", completed: false },
];


app.get("/", (req, res) => res.send(tasks));

app.listen(3000, () => console.log("Running on port 3000"));
