const path = require('path');
const fs = require('fs');

function indexPageHandler(_req, res) {
    const filePath = path.resolve(__dirname, '../../static/index.html');
    const fileStream = fs.createReadStream(filePath, {encoding: 'utf-8'});

    fileStream.pipe(res);
}



module.exports = {
    indexPageHandler
}