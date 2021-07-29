const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true, 
        unique: true 
    },
    role: { 
        type: String, 
        default: 'customer'
    }

},
{ 
    timestamps: true
 });

const user = mongoose.models.user || mongoose.model('User', userSchema)

module.exports = user; 