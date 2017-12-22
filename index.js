const express = require('express');
const passport = require('./services/passport-config');
const authRouter = require('./routes/auth-router');

const app = express();

authRouter(app);


app.use(passport);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('starting MERN app server...')
})

module.exports  = authRouter;