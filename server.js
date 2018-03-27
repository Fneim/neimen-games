const express = require('express');
const app = express();
const port = 3001;

app.get("/api", (req, res) => {
  const customers = [
    {id:1, firstName: "John", lastName:"Smith"},
    {id:2, firstName: "Jane", lastName: "Doe"}
  ];

  res.json(customers);

})
app.listen(port, () => console.log(`Listening on port ${port}`));
