const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.addComment = async(req,res,next)=>{
    try {
        const findPost = await Post.find({"_id":req.body.post_id});
        console.log(findPost);
        const addComment = await Comment.create({
            commentor_name:req.body.name,
            comment_text:req.body.comment,
            post_id:req.body.post_id
        })
        console.log(addComment);
        // const updateCommentsInPost = await Post.findOneAndUpdate({_id:req.body.post_id},{$push: {comments: addComment._id}});
        // console.log(updateCommentsInPost);
        res.status(200).json({
          message:"Comment added successfully"
        })
    } catch (error) {
        res.status(500).json({
          message:error.message
        })
    }
}

exports.latestTenComments = async(req, res) =>{
  try {
    const get10Comments = await Comment.find({"post_id":' '},{} ).sort({ "createdAt" : -1}).limit(10);
    res.send(get10Comments);
  } catch (error) {
    console.log(error.message);
  }
}

exports.getAllCommentsForPost = async(req, res) =>{
  try {
    const findTotalComments = await Comment.find({"post_id":req.params.id}).count();
    // const findComments = await Comment.find({"post_id":req.params.id});
    const findComments = await Comment.aggregate([
      { "$project":{
        "_id":0,
        "Name":"$commentor_name",
        "Comment":"$comment_text",
        "PostId":"$post_id",
        "createdAt":1
      }},
      // { $count : "Total"},
    ])
    console.log(findComments);
    let response = {};
    response.totalComments = findTotalComments;
    response.comments = findComments;
    // const findComments = await Comment.aggregate([
    //   { $group : { _id:"$_id", count:{$sum:1}}}
    // ]);
    res.status(200).json({
      message:'All comments for this post.',
      data: response
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}