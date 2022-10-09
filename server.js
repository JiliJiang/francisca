const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path')

const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join('public')));

// data parsing
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

//Server begins to listen
app.listen(PORT, () => {
  console.log(`App listening on PORT`+ PORT);
});


