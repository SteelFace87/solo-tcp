const fs = require('fs');
const rs = fs.createReadStream('./1_streams.md',
{
    encoding: 'utf8',    
})

rs.on('data', data=>
{
    const ws = fs.createWriteStream('./labCopy.md', 
    {
        encoding: 'utf8',
        flags: 'a'
    });
    ws.write(data);
})