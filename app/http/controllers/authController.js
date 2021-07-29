const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const passport  = require('passport');

function authController () {
    return {

        //login
        login(req, res) {
            res.render('auth/login');
        },

        //logic for postlogin
        postlogin(req, res, next) {
            //customize for postlogin
            const { email, password } = req.body;
            //validate request
            if(!email || !password) {
                req.flash('error', 'All fields are required')
                return res.redirect('/login')
            }

            passport.authenticate('local', (err, user, info)=> {
                if(err) {
                    req.flash('error', info.message)
                    return next(err)
                }
                if(!user){
                    req.flash('error', info.message)
                    return res.redirect('/login')
                }
                req.logIn(user, (err)=> {
                    if(err) {
                        req.flash('error', info.message)
                        return next(err)
                    }
                    const redirectUrl = req.session.returnTo || '/';
                    delete req.session.returnTo;
                    return res.redirect(redirectUrl);
                })
            })(req, res, next)

        },

        //register
        register(req, res) {
            res.render('auth/register');
        },

        //logic after register
        async postRegister(req, res){

            const { name, email, password } = req.body;
            //validate request
            if(!name || !email || !password) {
                req.flash('error', 'All fields are required')
                req.flash('name', name)
                req.flash('email', email)
                return res.redirect('/register')
            }

            //check if email exists
            User.exists({email: email}, (err, result)=>{
                if(result){
                    req.flash('error', 'Email already exists')
                    req.flash('name', name)
                    req.flash('email', email)
                    return res.redirect('/register')
                }
            })

            //Can't store password directly, we have to Hash the password using Bcrypt package 
            const hashedPassword = bcrypt.hashSync(password, 10);

            //create user 
            const user = new User({
                name,
                email,
                password: hashedPassword
            })

            user.save().then((user)=>{
                //login
                req.flash('success', 'Welcome to Pizza-App😍')
                return res.redirect('/')
            }).catch((err)=>{
                req.flash('error', 'Something Went Wrong🥺')
                return res.redirect('/register')
            })
        },

        //logout
        logout(req, res) {
            req.logout();
            req.flash('success', 'Good-Bye!😄');
            return res.redirect('/login');
        },

    };
};

module.exports = authController;