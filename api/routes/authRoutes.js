// @ts-nocheck
const User = require('../models/User');

const router = require('express').Router();
const CryptoJS = require("crypto-js");

const jwt = require('jsonwebtoken');

// REGISTER 
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC),
  });

  try {
    const saveUser = await newUser.save()
    console.log(saveUser);
    res.status(201).json(saveUser)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to register new user for a reason!" })
  }
})

// LOGIN 
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    !user && res.status(401).json("Wrong username!")
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    const inputPassword = req.body.password;

    OriginalPassword !== inputPassword && res.status(401).json("Wrong Password!")

    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin,
    }, process.env.JWT_SEC, { expiresIn: "3d" })

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken })
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router