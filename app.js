const express = require('express');
const path = require('path');

const port = 3000
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('users');
});

app.listen(port, () => {
    console.log(`User Manager listening on port ${port}`);
});
