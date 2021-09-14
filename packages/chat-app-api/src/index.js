const express = require('express');

const port = process.env.PORT || 8081;
const app = express();

app.get('/', (req, res) => {
  res.send('SOY EL BACKEND');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
