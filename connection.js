
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async (request, response) => {
  console.log("get it");
  const { username, password } = request.body;
  response.send(username)
  response.send(password)
  if (username === "hari" && password === "hari@123") {
    const payload = { username: username };
    const token = jwt.sign(payload, "secretkey");
    response.json({ jwt_token: token });
  } else {
    response.status(401).send("Invalid credentials");
  }
});

app.listen(4010, () => console.log("Server Running at http://localhost:4010"));
