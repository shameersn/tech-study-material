const express = require('express');
const app = express();
const genreRoutes = require('./routes/genres');

app.use(express.json());
app.use('/api/genres', genreRoutes);

app.all('*', (req, res) => res.send('Api server working.'));

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`App running on port ${PORT}`));