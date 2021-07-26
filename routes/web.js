const express = require('express');
const Router = express.Router();
const homeController = require('../app/http/controllers/homeController');
const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/customers/cartController');


Router.get('/',homeController().index);

Router.get('/login', authController().login);

Router.get('/register', authController().register);   

Router.get('/cart',cartController().index);

Router.post('/update-cart', cartController().update);

module.exports = Router;