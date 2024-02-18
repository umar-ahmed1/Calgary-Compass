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

// Function to get a user's itineraries
const getUserItineraries = async (req,res) => {
  const {userId} = req.body;
  try {
    // Find the user by their ID
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    
    // Return the user's itineraries
    res.status(200).json({ id: user._id, email, token });
    return user.itinerary;
  } catch (error) {
    throw new Error("Error fetching user itineraries: " + error.message);
  }
};

// Function to append an itinerary to user's itineraries
const addItineraryUser = async (req,res) => {
  const {userId,userItinerary} = req.body;
  console.log(userId)
  try {
    // Find the user by their ID
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    
    // Append the new itinerary to the user's itineraries array
    user.itinerary.push(userItinerary);
    await user.save();
    
    // Return the updated user object with the appended itinerary
    return user;
  } catch (error) {
    res.status(400).json({ error: error.message });
    throw new Error("Error appending itinerary to user: " + error.message);
  }
};

// Export Functions
module.exports = {
  loginUser,
  signupUser,
  getUserItineraries,
  addItineraryUser
};