const {v4: uuidv4} = require('uuid')
const User = require('../models/user')
const { setUser } = require('../service/auth') 

async function handleUserSignup(req, res) {
  try {
const { name, email, password } = req.body;

// Check if email already exists
// const existingUser = await User.findOne({ email: req.body.email });
const existingUser = await User.findOne({ email});

if(existingUser){
  return res.render('signup',  { alert: "Email already exists" })
    // return res.status(400).json({ message: "Email already exists" });
}

const newUser = new User({ name, email, password });
await newUser.save()

  // await User.create({
  //   name,
  //   email,
  //   password,
  // });
  return res.render("home", { alert: "Signup successful!" });
  // return res.redirect('/');   
} catch(err){
  console.error(err);
  return res.status(500).send("Server error");
}
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  // if (!user) 
  //   return res.render('login',{
  //  error: "Invalid Username or Password",
  // });


  if(!user) 
    return res.render('signup', {alert: "User not found with this gmail, Please sign up first."})

  // const sessionId = uuidv4();
  // setUser(sessionId, user);
  // res.cookie("uid", sessionId);

  const token = setUser(user);
  res.cookie("uid", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // only https in prod
  maxAge: 24 * 60 * 60 * 1000 // 1 day
  });
  return res.redirect('/');
  // return res.render('home');
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}