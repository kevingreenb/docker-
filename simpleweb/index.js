const express = require('express');

const app = express();

//calling the application reponds with hi there
app.get('/', (req, res) => {
    res.send('Hi there');
});

//listens on port 8080
app.listen(8080, () => {
    console.log('Listening on port 8080');
});
