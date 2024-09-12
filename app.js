const express = require('express');

const bodyParser = require('body-parser');

const mainRoutes = require('./routes/main')


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(mainRoutes);

app.listen(3000);
