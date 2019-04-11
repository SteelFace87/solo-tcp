const net = require('net');
const readline = require('readline');

//stdin/stdout strigger on echo
const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
        prompt: '> '
    });

const client = net.createConnection(8080, 'localhost', () => {
    console.log('am connected');

    rl.prompt();
    rl.on('line', line => {
        console.log('rl on detected');
        client.write(line);
        rl.prompt();
    });

    client.on('data', data => {
        // rl.write(`${data} rl.write`);
        console.log('\nbounceback ' + data.toString());
        rl.prompt();
    });

});

