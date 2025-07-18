const express = require("express");
const app = express();

const PORT = 3000;

// Static data
const tasks = [
  { id: 1, task: "Automate with GitHub Actions" },
  { id: 2, task: "Dockerize the app" },
  { id: 3, task: "Deploy with CI/CD" },
];

app.get("/task", (req, res) => {
  res.status(200).json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
