const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send({ text: 'test'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('starting MERN app server...')
})