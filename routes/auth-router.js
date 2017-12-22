const passport = require('passport');
const express  = require('express') 
const router = express.Router(); 

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
)

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/success',
    failureRedirect: '/',
    failureFlash: true
    })
);

router.get('/success', (req, res, next) => {
    res.send({text: 'login was succesful!'})
})

module.exports = router;