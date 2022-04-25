const User = require('../models/User');

module.exports.createUser = async(req, res) =>{
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email
    })
    res.status(200).json({
      message:"User created successfully",
      data: newUser
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}
module.exports.getUser = async (req, res) =>{
  try {
    let findUsers = await User.find();
    res.status(200).json({
      message: 'All users',
      data: findUsers
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}