const path = require('path');
const fs = require('fs');


function editorPageHandler(_req, res) {
    const filePath = path.resolve(__dirname, '../../static/pages/editor.html');
    const fileStream = fs.createReadStream(filePath, {encoding: 'utf-8'});

    fileStream.pipe(res);
 
}

module.exports = {
    editorPageHandler
}