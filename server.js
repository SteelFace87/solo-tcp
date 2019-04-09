const net = require ('net');

//evert client is a socket


const server = net.createServer((client)=>{
    console.log('client connected!!');
    client.on('data', console.log(data));
});

server.listen(7890);