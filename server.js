const express = require('express');
const app = express();
app.get('/', (req,res) => res.send('Fraction Calculator'));
const server = app.listen(3000);