const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

exports.addPost = async(req,res,next)=>{
    try {
        const addPost = await Post.create({
            postedBy:req.body.postedBy,
            postTitle:req.body.postTitle
        })
        res.status(200).json({
          message:"Post added successfully"
        })
    } catch (error) {
        res.status(500).json({
          message:error.message
        })
    }
}
exports.getPostDetailsWithUser = async(req,res,next) =>{
  try {
    // const getPost = await Post.find();
    const getPost = await Post.find().populate("postedBy")
    // .then(p =>{
    //   console.log(p);
    //   res.json(getPost);
    // })
    // .catch(error =>{
    //   console.log(error)
    // })
    console.log(getPost);
    res.status(200).json({
      data:getPost
    })
  } catch (error) {
    res.status(200).json({
      message:error.message
    })
  }
}
exports.getPostWithCommentDetails = async(req, res, next) =>{
  try {
  const getPostDetails = await Post.find().populate('comments');
  console.log(getPostDetails);
  res.status(200).json({
    message:'Post details',
    data: getPostDetails
  })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

exports.getPostById = async(req, res) =>{
  try {
    let findRecentComments = await Comment.find({"post_id":req.params.id}).sort({createdAt:-1}).limit(10);
    // console.log(findRecentComments);

    // const updateCommentsInPost = await Post.findOneAndUpdate({_id:req.params.id},{$push: {comments: findRecentComments[0]._id}});
    // console.log(findRecentComments[0]._id);
    for(let i=0;i<findRecentComments.length;i++)
    {
      const updateCommentsInPost = await Post.findOneAndUpdate({_id:req.params.id},{$push: {comments: findRecentComments[i]._id}});
      console.log(findRecentComments[i]._id);
    }
    let getPost = await Post.find({"_id":req.params.id}).populate("comments");
    res.status(200).json({
      message: "Post details.",
      data: getPost
    })
  } catch (error) {
    console.log(error.message);
  }
}