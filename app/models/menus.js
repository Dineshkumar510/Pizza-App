const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const menuSchema = new Schema({

    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    size: { type: String, required: true }

});

const menus = mongoose.models.menus || mongoose.model('menus', menuSchema)

module.exports = menus;