const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = 3008;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(bodyParser.json());
app.use(cors());

const employees = [
  {
    id: 1,
    name: "John",
    status: "Working",
    img: "https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    id: 2,
    name: "Jack",
    status: "Working",
    img: "https://as1.ftcdn.net/v2/jpg/03/02/88/46/1000_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
  },
  {
    id: 3,
    name: "Sheli",
    status: "Working",
    img: "https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 4,
    name: "Eitan",
    status: "Working",
    img: "https://as2.ftcdn.net/v2/jpg/02/92/95/17/1000_F_292951705_zv47wnXkjzHzSouYLpYcNgTOOosDv1ml.jpg",
  },
];

app.get("/users", (req, res) => {
  res.send(employees);
});

app.post("/users/:id", (req, res) => {
  const index = employees.findIndex(obj => obj.id === +req.params.id);
  employees[index].status = req.body.status;
  res.send(employees);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
