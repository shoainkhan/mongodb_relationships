const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   name: String,
   email: String,
   blogs: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
   }]
});

const BlogSchema = new Schema({
   title: String,
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   body: String,
})

const User = mongoose.model("User", UserSchema);
const Blog = mongoose.model("Blog", BlogSchema);

module.exports = {User, Blog}