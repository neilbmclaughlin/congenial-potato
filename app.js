var express = require('express')
var app = express()

var port = process.env.port || 3000;

app.get('/', function (req, res) {
  console.log({ headers: req.headers});
  res.send('Hi World!')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
