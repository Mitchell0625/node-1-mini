const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const bc = require("./controllers/books_controller");
app.use(bodyParser.json());

app.get("/api/books", bc.read);
app.post("/api/books", bc.create);
app.put(`/api/books/${id}`, bc.update);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
