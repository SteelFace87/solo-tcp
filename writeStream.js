const fs = require ('fs');

const ws = fs.createWriteStream('./spot.json', {
    encoding: 'utf8',
    flags: 'a'});
const rs = fs.createReadStream('./spot.json', {encoding:'utf8'});

ws.write('{');
ws.write('\n');
ws.write('dog:randy');
ws.write('\n');
ws.write('}');
ws.end();


rs.on('data',chunk=>{
   
    console.log(chunk);
})
