const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
  res.send('hello, this is Isha.');
});

  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });


module.exports = app;