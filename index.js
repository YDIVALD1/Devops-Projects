const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from AWS!");
});

console.log("Updated log message");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
