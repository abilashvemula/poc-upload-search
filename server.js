const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 3000;
const UPLOADS_DIR = require('./config/index').UPLOADS_DIR;

app.use(express.static('www'));
app.use(express.static(UPLOADS_DIR));

require('./app/routes/index')(app);

app.listen(PORT, () => {
	console.log(`Server Is Up And Running On Port ${PORT}`)
})