const mongoose = require('mongoose');
const {User} = require("../models/user");
const user_validate = require('../validation/userValidation')
const  _ = require('lodash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.index = function (req,res){
    res.send('the first render controller with Node JS ~^^-')
}
convertToUser = function (user){
   let newUser = new User()

    return newUser
}

exports.create_user = async function (req , res ) {
     var user =_.pick(req.body,['fullname','email','password'])
     validate(user,res)
     var found =  await  User.findOne({email:user.email})
      if (!_.isEmpty(found))
          return res.send('user is acualty exist ')
      const saltRound = 10
      const salt  = await bcrypt.genSalt(saltRound)
      user.password = await bcrypt.hash(user.password,salt)
      let userModel = new User()
      userModel.fullname = user.fullname
      userModel.email = user.email
      userModel.password = user.password
     await userModel.save()
    const jwt_tokens = userModel.generateTokens()
     res.header('x-auth-token',jwt_tokens).send(JSON.stringify(userModel))
}
var validate = function (user,res) {
    const {error} = user_validate.userValidation(user)
    if (error)
        return res.send(error.details[0].message )
}

exports.login = async  function (req , res) {
    var user =_.pick(req.body,['email','password'])
    loginValidate(user,res)
    const found = await User.findOne({email: user.email});
    if (_.isEmpty(found))
         return res.send(JSON.stringify({status:false,message:'Invald Email or password'}))
     const checkPassword = await bcrypt.compare( user.password,found.password )
     if (!checkPassword)
         return res.send({status:false ,message:'Invald Email or password'})
    const jwt_tokens = found.generateTokens()
    return  res.send(JSON.stringify({status:true}) )
}

var loginValidate = function (user,res) {
    const {error} = user_validate.loginUserValidation(user)
    if (error)
        return res.send(JSON.stringify({status:false ,message:error.details[0].message})  )
}

exports.user_profile = async function (req , res ) {
    var profile = await User.findById(req.user._id)
    res.send(profile)
}