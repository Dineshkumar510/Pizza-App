const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user'); 
const bcrypt = require('bcryptjs');

    function init(passport) {

        passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done )=>{
            const user = await User.findOne({ email: email })
            if(!user) {
                return done(null, false, {message: 'No user found with this Email'})
            }

            bcrypt.compare(password, user.password).then((match)=>{
                if(match) {
                    return done(null, user, {message: 'Logged in Successfully'})
                }else {
                    return done(null, false, {message: 'Invalid Username or Password'})
                } 
            }).catch(err => {
                return done(null, false, {message: 'Something Went Wrong'})
            })

        }))

        passport.serializeUser((user, done) => {
            done(null, user._id)
        })

        passport.deserializeUser((id, done)=> {
            User.findById(id, (err, user)=> {
                done(err, user)
            })
        })
    
    }


module.exports = init;