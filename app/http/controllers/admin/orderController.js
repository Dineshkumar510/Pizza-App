const Order = require('../../../models/order'); 

function orderController() {
    return {
        index(req, res) {
            Order.find({ status: { $ne: 'Completed' } }, null, { sort: { 'createdAt': -1 } }).
            populate('customerId', '-password').exec((err, orders)=>{
                if(req.xhr){
                    return res.json(orders);
                } else {
                    res.render('admin/orders');
                }
            })
        }
    }
}


module.exports = orderController;