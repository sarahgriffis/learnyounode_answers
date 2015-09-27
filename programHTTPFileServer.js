var http = require('http')
var fs = require('fs')


server = http.createServer(function (req, res) {
  // request handling logic...a

  str = fs.createReadStream(process.argv[3])
  str.pipe(res)

})

server.listen(process.argv[2])


