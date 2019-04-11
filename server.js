const net = require('net');

//every client is a socket
const server = net.createServer(connectedClient => {
  console.log('client connected to server');

  connectedClient.on('data', data => 
  {
    console.log(data.toString());
    connectedClient.write(data);
  });

  //   client.pipe(client);

});


server.listen(8080);