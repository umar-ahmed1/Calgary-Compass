// Import required files
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt");

// Helper function to create JWT token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ id: user._id, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Registering a user
const signupUser = async (req, res) => {
  const { email, password, firstName,lastName } = req.body;
  try {
    const user = await User.signup(email, password,firstName,lastName);
    const token = createToken(user._id);
    res.status(200).json({ id: user._id, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Export Functions
module.exports = {
  loginUser,
  signupUser,
};