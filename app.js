const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Aprendendo a criar um novo estágio para revisar o código uhuuuul!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
