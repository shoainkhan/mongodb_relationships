const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const postSchema =  new mongoose.Schema({
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    postTitle:{
        required:true,
        type:String
    },
    comments:[{ type:mongoose.Schema.Types.ObjectId,ref:"Comment"}]
},{
    timestamps: true
});
const Post = mongoose.model("Post",postSchema);

module.exports = Post;