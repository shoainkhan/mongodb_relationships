const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentor_name:{
        required:true,
        type:String
    },
    comment_text:{
        required:true,
        type:String
    },
    post_id:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true
    }
},{
    timestamps:true
})

const Comment = mongoose.model('Comment',commentSchema);

module.exports =  Comment ;