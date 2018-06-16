const config = require('config');
const express = require('express');

const logger = require('./middlewares/logger');
const appRoutes = require('./routes/');
const courserRoutes = require('./routes/courses');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(logger);


app.use('/', appRoutes);
app.use('/api/courses', courserRoutes);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`App running on port ${PORT}`));