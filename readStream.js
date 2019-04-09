const fs = require ('fs');

const rs = fs.createReadStream('./1_streams.md', {
    encoding: 'utf8',
    highWaterMark: 64*1028 //64 bits of data (default)
});

rs.on('data', data=>{
    console.log(data);
});


