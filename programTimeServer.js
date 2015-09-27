var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function (socket) {
  // socket handling logic
 socket.end(strftime('%F %R'))
})

server.listen(process.argv[2])


