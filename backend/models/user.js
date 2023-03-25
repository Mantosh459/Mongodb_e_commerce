const mongoose = require('mongoose');

const userSchema = mongoose.Schema( { 
    firstName: { type:String, required:true, trim:true},
    lastName: { type:String, trim:true},
    phoneNo: {type: Number , require:true},
});

const user = mongoose.model('user' , userSchema);

module.exports = user;

