var express = require('express')
var app = express()

var port = process.env.port || 3000;

app.get('/', function (req, res) {
  console.log({ request: req});
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
