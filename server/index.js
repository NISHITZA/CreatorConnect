const express = require('express');
const passport = require('passport');
const { googleClientSecret } = require('./config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    },(accessToken)=>{
        console.log(accessToken);
    })
)

app.get('/',(req,res,)=>{
    res.send({hi:'hello'})
})

const PORT= process.env.PORT || 3000;
app.listen(PORT)