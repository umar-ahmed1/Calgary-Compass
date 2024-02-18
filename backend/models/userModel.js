//for creating the schema - mongoose
const mongoose = require("mongoose");
//for hashing the passwords - bcrypt
const bcrypt = require("bcrypt");

//Create Schema for user
const Schema = mongoose.Schema;

//user has email,password,firstname,lastname
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  itinerary: {
    type: Array,
    required: false,
  }
});

//static method to aid with signing up a user instead of doing everything in the controller
userSchema.statics.signup = async function (email,password,firstName,lastName) {
  //if theres no email or password throw an error
  if (!email) {
    throw Error("email must be filled");
  }

  if (!password ) {
    throw Error("password must be filled");
  }

  //check if email already exists in database, if so then send back error response
  const emailExists = await this.findOne({ email });
  if (emailExists) {
    throw Error("Email already in use");
  }

  //hash the password - salts are added to end of password ex password123agkeaghaeh
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //create the user in the database and return it
  const user = await this.create({ email, password: hash, firstName,lastName});
  return user;
};

//static method to aid with logging in a user
userSchema.statics.login = async function (email, password) {
  //if theres no email or password throw an error
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  //find the user of the given email
  const user = await this.findOne({ email });

  //if no user found throw an error
  if (!user) {
    throw Error("User not found");
  }

  //compare password they are trying to login with and stored hashed password
  const passwordsMatch = await bcrypt.compare(password, user.password);

  //if the passwords dont match then throw an error
  if (!passwordsMatch) {
    throw Error("Incorrect Password");
  }

  //return the user since login is successful
  return user;
};

//Export the Schema
module.exports = mongoose.model("User", userSchema);