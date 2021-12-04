const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: '.env' });

const app = express();
app.use(express.json());
//template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const routes = require('./routes');
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`your application is running on ${process.env.PORT}`);
});