const express = require('express');
const path = require('path');
const {indexPageHandler} = require('./handlers/index-page');
const {editorPageHandler} = require('./handlers/editor-page');

const staticPath = path.resolve(__dirname, '../static');

const app = express();

app.use('/editor',editorPageHandler)
app.use('/static', express.static(staticPath));
app.use('/', indexPageHandler);
app.listen(8080, () => {
    console.log('Server started');
});
