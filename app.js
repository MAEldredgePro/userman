const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const port = 3000
const path = require('path');
const userDatafilename = './users.json';
let users = loadUsers();
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// handle the default request for the website.
// Send back the 'all users' page
app.get('/', (req, res) => {
    res.render('users', { userList: users });
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.get('/delete/:uuid', (req, res) => {
    users = users.filter(user => user.uuid != req.params.uuid);
    res.render('users', { userList: users });
    fs.writeFileSync(userDatafilename, JSON.stringify(users));
});

app.get('/edit/:uuid', (req, res) => {
    console.log('GET /edit/:uuid');
    console.log(req.params.uuid);
    const user = users.find(user => user.uuid === req.params.uuid);
    res.render('edit', { user: user });
})

app.post('/save', (req, res) => {
    console.log('/save req.body');
    console.log(req.body);
    const user = {
        uuid: req.body.uuid || uuidv4(),
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }

    users = users.filter(user => user.uuid != req.body.uuid);

    users.push(user);

    users.sort((a, b) => {
        if (a.username > b.username) {
            return 1;
        } else if (a.username === b.username) {
            return 0;
        } else {
            return -1;
        }

        fs.writeFileSync(userDatafilename, JSON.stringify(users));

        res.render('redirect');
    });

    app.listen(port, () => {
        console.log(`User Manager listening on port ${port}`);
    });

    function loadUsers() {
        if (!fs.existsSync(userDatafilename)) {
            return [];
        }

        let users = require(userDatafilename);
        console.log(`Loaded ${users.length} previously saved users.`)
        return users;
    }
