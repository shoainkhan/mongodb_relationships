const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    username:{
      required: true,
      type: String
    },
    email:{
      required: true,
      type: String
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;