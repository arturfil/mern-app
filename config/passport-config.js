const passport = require('passport');
const UserModel = require('../models/user-model.js');
const bcrypt = require('bcrypt');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


passport.serializeUser((userFromDb, done) => {
    done(null, userFromDb._id);
});

passport.deserializeUser((idFromBowl, done) => {
    UserModel.findById(
        idFromBowl,

        (err, userFromDb) => {
            if (err) {
                done(err);
                return;
            }

            done(null, userFromDb);

        }
    )
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.google_client_id,
            clientSecret: process.env.google_client_secret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        (accesToken, refreshToken, profile, done) => {
            console.log('Google user info:');
            console.log(profile.emails[0].value);
            UserModel.findOne(
                { googleID: profile.id },
                (err, userFromDb) => {
                    if (err) {
                        done(err);
                        return;
                    }
                    if (userFromDb) {
                        done(null, userFromDb);
                        return;
                    }
                    const theUser = new UserModel({
                        googleID: profile.id,
                        email: profile.emails[0].value
                    });
                    theUser.save((err) => {
                        if (err) {
                            done(err);
                            return;
                        }
                        done(null, theUser);
                    })
                }
            )
        }
    )
);
