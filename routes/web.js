const express = require('express');
const Router = express.Router();
const guest = require('../app/http/middlewares/guest');
const homeController = require('../app/http/controllers/homeController');
const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/customers/cartController');


Router.get('/',homeController().index);

Router.get('/login', guest, authController().login);
Router.post('/login', authController().postlogin);

Router.get('/register', guest, authController().register);   
Router.post('/register', authController().postRegister);

Router.post('/logout', authController().logout);

Router.get('/cart',cartController().index);
Router.post('/update-cart', cartController().update);

module.exports = Router;