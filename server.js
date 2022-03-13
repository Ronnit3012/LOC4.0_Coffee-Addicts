// Importing modules
const express = require('express');
const hbs = require('hbs');
const path = require('path');
// const { router } = require('./controller/controllers.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
// const data = require('./data/data');

const app = express();

app.use(express.json());
app.use( bodyParser.json() );       // to support JSON-encoded bodies

// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//     extended: true})); 

// app.use(cors());

// Define paths for Express Configuration
const publicDirectoryPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, './templates/views'); // we change the views directory
const partialsPath = path.join(__dirname, './templates/partials'); // we create a directory for the partials folder

// // Setup Handlebars Engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);   // we set up another setting for express, we changed the directory of the views folder to templates
hbs.registerPartials(partialsPath);   // this hbs.registerPartials take the path as an argument where the .hbs partials files will be there

// // Setup Static Directory to serve
app.use(express.static(publicDirectoryPath));  // this becomes our main directory on our local host
// app.use('/', router);

// For index.hbs
app.get('', (req, res) => {   // Making it Dynamic
    res.render('index', {

    });
});

// For login.hbs
app.get('/login', (req, res) => {   // Making it Dynamic
    res.render('login', {

    });
});

// For signup.hbs
app.get('/signup', (req, res) => {   // Making it Dynamic
    res.render('signup', {

    });
});

// For dashboard.hbs
app.get('/dashboard', (req, res) => {   // Making it Dynamic
    res.render('dashboard', {
        name: 'Anushka',
    });
});

// For Cricket.hbs
app.get('/dashboard/cricket', (req, res) => {   // Making it Dynamic
    res.render('cricket', {

    });
});

// For Hockey.hbs
app.get('/dashboard/hockey', (req, res) => {   // Making it Dynamic
    res.render('hockey', {

    });
});

// For Yoga.hbs
app.get('/dashboard/yoga', (req, res) => {   // Making it Dynamic
    res.render('yoga', {

    });
});

// after Login
// app.get('/home', (req, res) => {   // Making it Dynamic
//     res.render('HomeAfter', {
//         title: 'Weather',
//         name: 'Nihal Gupta'
//     });
// });

app.get('/*', (req, res) => {   // Making it Dynamic
    res.render('Error', {
        Message: 'Oops! There was some error',
    });
});


//Route that handles login logic
// app.post('/login', (req, res) =>{
//     console.log(req);
//     console.log(req.body.email) 
//     console.log(req.body.password) 
// })

// //Route that handles signup logic
// app.post('/signup', (req, res) =>{
//     console.log(req.body.fullname) 
//     console.log(req.body.username)
//     console.log(req.body.password) 
// })

// Server call
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})