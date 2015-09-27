var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  // request handling logic...a
  if (req.method == 'GET' & req.url.match("/api/parsetime") != null) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    iso = req.url.match("iso=(.*)")[1]
    d = new Date(Date.parse(iso))
    json =  JSON.stringify({
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    })
    res.end(json)
  }

  if (req.method == 'GET' & req.url.match("/api/unixtime") != null) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    iso = req.url.match("iso=(.*)")[1]
    d = Date.parse(iso)
    json = JSON.stringify({
      unixtime: d
    })
    res.end(json)
  }

})

server.listen(process.argv[2])


