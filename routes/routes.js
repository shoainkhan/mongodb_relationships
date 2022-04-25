const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');
const commentController = require('../controller/commentController');
const userController = require('../controller/userController');

router.post('/post',postController.addPost);
router.post('/comment',commentController.addComment);
router.get('/getPost',postController.getPostDetailsWithUser);
router.post('/user', userController.createUser);
router.get('/viewPost', postController.getPostWithCommentDetails);
router.get('/getUser', userController.getUser);
router.get('/recentTenComments',commentController.latestTenComments);
router.get('/getPostById/:id', postController.getPostById);
router.get('/getCommentsForPost/:id', commentController.getAllCommentsForPost);
module.exports = router;