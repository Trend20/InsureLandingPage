const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session');


const app = express();

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// applying styles
app.use(express.static(__dirname + '/public'));

// ROUTES
app.get('/', (req, res) => {
    res.render('./pages/index');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});