const User = require("./model");

User
   .findOne({_id: userId })
   .populate("blogs") // key to populate
   .then(user => {
      res.json(user); 
   });