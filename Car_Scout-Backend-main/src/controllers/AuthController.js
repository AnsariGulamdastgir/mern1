// const User = require("../models/UserModel");

// // ================= REGISTER =================
// const register = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, role } = req.body;

//     // check user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.json({ message: "User already exists" });
//     }

//     // create user
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password,
//       role   // 🔥 important
//     });

//     await newUser.save();

//     res.json({ message: "Registration Successful" });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // ================= LOGIN =================
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email, password });

//     if (!user) {
//       return res.json({ message: "Invalid Email or Password" });
//     }

//     // 🔥 IMPORTANT → send role
//     res.json({
//       message: "Login Success",
//       user: {
//         _id: user._id,
//         firstName: user.firstName,
//         email: user.email,
//         role: user.role
//       }
//     });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// module.exports = { register, login };



const User = require("../models/UserModel");
const mailSend = require("../utils/MailUtil");
const { getWelcomeEmailTemplate, getOTPEmailTemplate } = require("../utils/EmailTemplates");

// ================= REGISTER =================
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // If user exists but is not verified, we can allow re-registration to resend OTP
      if (!existingUser.isVerified) {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        existingUser.otp = otp;
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
        existingUser.password = password;
        existingUser.role = role;
        await existingUser.save();

        await mailSend(
          email,
          "Verify your CarScout account",
          getOTPEmailTemplate({ firstName, otp })
        );

        return res.json({ success: true, message: "OTP sent to email for verification" });
      }
      return res.json({ success: false, message: "User already exists" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      role,
      otp,
      isVerified: false
    });

    await newUser.save();

    await mailSend(
      email,
      "Verify your CarScout account",
      getOTPEmailTemplate({ firstName, otp })
    );

    res.json({ success: true, message: "OTP sent to email for verification" });
  } catch (err) {
    console.log("REGISTER ERROR:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ================= VERIFY OTP =================
const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.isVerified) {
      return res.json({ success: false, message: "Account already verified" });
    }

    if (user.otp !== otp) {
      return res.json({ success: false, message: "Invalid OTP" });
    }

    user.isVerified = true;
    user.otp = ""; // clear otp
    await user.save();

    // Send professional welcome email after successful signup
    const welcomeTemplate = getWelcomeEmailTemplate({
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role || "user"
    });

    await mailSend(
      email,
      "Welcome to CarScout - Your account is ready",
      welcomeTemplate
    );

    res.json({ success: true, message: "Account verified successfully" });
  } catch (err) {
    console.log("VERIFY ERROR:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ================= LOGIN =================
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.json({ success: false, message: "Invalid Email or Password" });
    }

    if (!user.isVerified) {
      return res.json({ success: false, message: "Account not verified. Please verify your email first." });
    }

    res.json({
      success: true,
      message: "Login Success",
      user: {
        _id: user._id,
        firstName: user.firstName,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { register, verifyOtp, login };
