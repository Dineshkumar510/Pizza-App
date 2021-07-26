function cartController () {
    return {
        index(req, res) {
            res.render('customers/cart');
        },
        update(req, res) {
            //For the First time creating cart & adding basic obj struct.
            if(!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0
                }
            }
            let cart = req.session.cart
            //checking if items are does not exist in cart
            if(!cart.items[req.body._id]){
                cart.items[req.body._id] = {
                    item: req.body,
                    qty: 1
                }
                cart.totalQty = cart.totalQty + 1;
                req.body.price = parseInt(req.body.price)
                cart.totalPrice = parseInt(cart.totalPrice)
                cart.totalPrice = cart.totalPrice + req.body.price 
               
                
            } else {
                cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1
                cart.totalQty = cart.totalQty + 1
                req.body.price = parseInt(req.body.price)
                cart.totalPrice = parseInt(cart.totalPrice)
                cart.totalPrice = cart.totalPrice + req.body.price  
            }

            return res.json({totalQty: req.session.cart.totalQty});
        }
    };
};

module.exports = cartController;