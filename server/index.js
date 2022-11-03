const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
const token = "IranServer";
let products = [
  {
    id: "1",
    name: "کفش پاشنه دار",
    price: 122000,
  },
  {
    id: "2",
    name: "کفش پاشنه دار",
    price: 122000,
  },
  {
    id: "3",
    name: "کفش پاشنه دار",
    price: 122000,
  },
  {
    id: "4",
    name: "کفش پاشنه دار",
    price: 122000,
  },
];
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if ("admin@gmail.com" === username && "admin" === password) {
    return res.send({
      success: true,
      data: token,
    });
  }
  return res.send({
    success: false,
    error: "username or password is wrong!",
  });
});

app.get("/users/me", (req, res) => {
  const { authorization } = req.headers;

  if (token === authorization) {
    return res.send({
      success: true,
      data: {
        id: 1,
        username: "admin",
        email: "info@7larn.com",
        name: "admin",
      },
    });
  }

  return res.send({
    success: false,
    error: "token is not valid",
  });
});

app.get("/products", (req, res) => {
  const { authorization } = req.headers;

  if (token === authorization) {
    return res.send({
      success: true,
      data: products,
    });
  }
  return res.send({
    success: false,
    error: "token is not valid",
  });
});

app.post("/add-product", (req, res) => {
  const { authorization } = req.headers;
  const { name, price } = req.body;

  console.log("name", name);
  console.log("price", price);

  if (token === authorization) {
    const newProduct = {
      name,
      price,
      id: Math.floor(Math.random() * 1000),
    };
    return res.send({
      success: true,
      data: newProduct,
    });
  }
  return res.send({
    success: false,
    error: "token is not valid",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
