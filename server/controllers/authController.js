const User = require("../models/User");
// const jwt = require('jsonwebtoken');

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.registerUser = async (req, res) => {
  try {
    const { username, name , email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      const newUser = new User({
        username: username,
        name: name,
        email: email,
        password: password,
      });

      await newUser.save();
      res.status(201).json({ message: "User registered successfully" })
    }
    else {
      res.status(401).json({ message: "user already registered" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.registeredUser = async (req, res) => {
  const result = await User.find({}, { name: 1, _id: 0 });
  res.send(result);
}



// ______________________________________________________________________________________________________________


// // Generate JWT Token
// const generateToken = (userId) => {
//   return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
// };

// // Sign Up
// exports.registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if user exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Create new user
//     const user = await User.create({ name, email, password });

//     res.status(201).json({
//       id: user._id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// // Sign In
// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (user && (await user.comparePassword(password))) {
//       res.json({
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// exports.registeredUser = async (req, res) => {
//   res.send('Welcome to registered user page');
// }


