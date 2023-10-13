'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get('/test', (req, res) => {
	res.send('Testing the server');
});

app.listen(PORT, () => {
	console.log('Tojot Cloud Server is running');
})