const express = require('express');
const app = express();

app.listen(4000, ()=> console.log('Listening for action on port:4000'));

module.exports = app; // needed for test suite
