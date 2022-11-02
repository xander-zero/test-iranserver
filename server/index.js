const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3001;
const token = "IranServer";

const products = [
  {
    id: "1",
    name: "کفش",
    price: "20000",
  },
  {
    id: "2",
    name: "کفش",
    price: "20000",
  },
  {
    id: "3",
    name: "کفش",
    price: "20000",
  },
];

console.log(products);

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if ("admin@gmail.com" === username && "admin" === password) {
    res.send({
      success: true,
      data: token,
    });
  }
  res.send({
    success: false,
    error: "username or password is wrong!",
  });
});

app.get("/users/me", (req, res) => {
  const { authorization } = req.headers;

  if (token === authorization) {
    res.send({
      success: true,
      data: {
        id: 1,
        username: "admin",
        email: "iranServer@gmail.com",
        name: "admin",
      },
    });
  }

  res.send({
    success: false,
    error: "token is not valid",
  });
});

app.get("/products", (req, res) => {
  const { authorization } = req.headers;
  if (token === authorization) {
    res.send({
      success: true,
      data: products,
    });
  }

  res.send({
    success: false,
    error: "token is not valid",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
