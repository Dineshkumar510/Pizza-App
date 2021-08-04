const express = require('express');
const Router = express.Router();
const homeController = require('../app/http/controllers/homeController');
const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/customers/cartController');
const orderController = require('../app/http/controllers/customers/orderController');
const AdminOrderController = require('../app/http/controllers/admin/orderController');
const statusController = require('../app/http/controllers/admin/statusController');

//Middlewares:
const guest = require('../app/http/middlewares/guest');
const auth = require('../app/http/middlewares/auth');
const admin = require('../app/http/middlewares/admin');



Router.get('/',homeController().index);

Router.get('/login', guest, authController().login);
Router.post('/login', authController().postlogin);

Router.get('/register', guest, authController().register);   
Router.post('/register', authController().postRegister);

Router.get('/logout', authController().logout);

Router.get('/cart',cartController().index);
Router.post('/update-cart', cartController().update);


//customer Routes
Router.post('/orders', auth, orderController().store)
Router.get('/customer/orders', auth, orderController().index)
Router.get('/customer/orders/id_:id', auth, orderController().show)

//Admin Routes
Router.get('/admin/orders', admin, AdminOrderController().index)
Router.post('/admin/order/status', admin, statusController().update)


module.exports = Router;