module.exports = function (server) {
  const io = require('socket.io')(server)

  
  io.on('connection', function (socket) {
    console.log('client connected to the server')

    
    socket.on('sendMsg', function (data) {
      console.log('server receives the message sent by the client', data)
    
      data.name = data.name.toUpperCase()
      
      // socket.emit('receiveMsg', data)
      io.emit('receiveMsg', data)
      console.log('server sends a message to the client', data)
    })
  })
}