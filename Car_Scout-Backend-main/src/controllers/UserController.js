const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const mailSend = require("../utils/MailUtil");
const jwt = require("jsonwebtoken");
const { getWelcomeEmailTemplate, getOTPEmailTemplate } = require("../utils/EmailTemplates");

const secret = process.env.JWT_SECRET || "secret";

// ================= REGISTER =================
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;
    const normalizedEmail = email.toLowerCase();

    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      if (!existingUser.isVerified) {
        // Resend OTP if account exists but isn't verified
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const hashedPassword = await bcrypt.hash(password, 10);
        
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
        existingUser.password = hashedPassword;
        existingUser.role = role;
        existingUser.otp = otp;
        await existingUser.save();

        await mailSend(
          normalizedEmail,
          "Verify your CarScout account",
          getOTPEmailTemplate({ firstName, otp })
        );

        return res.status(200).json({
          success: true,
          message: "A new verification code has been sent to your email",
        });
      }

      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedPassword = await bcrypt.hash(password, 10);

    const savedUser = await User.create({
      firstName,
      lastName,
      email: normalizedEmail,
      password: hashedPassword,
      role,
      otp,
      isVerified: false,
    });

    try {
      await mailSend(
        normalizedEmail,
        "Verify your CarScout account",
        getOTPEmailTemplate({ firstName, otp })
      );
    } catch (mailErr) {
      console.log("Mail Error during registration:", mailErr.message);
    }

    res.status(201).json({
      success: true,
      message: "Verification code sent to your email",
      data: { email: normalizedEmail },
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Registration failed",
      error: err.message,
    });
  }
};

// ================= VERIFY OTP =================
const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const normalizedEmail = email.toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Account is already verified",
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid verification code",
      });
    }

    user.isVerified = true;
    user.otp = "";
    await user.save();

    // Send Welcome Email
    const welcomeHtml = getWelcomeEmailTemplate({
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    });

    try {
      await mailSend(
        normalizedEmail,
        "Welcome to CarScout - Account Activated!",
        welcomeHtml
      );
    } catch (err) {
      console.log("Welcome mail error:", err.message);
    }

    res.status(200).json({
      success: true,
      message: "Email verified successfully! You can now login.",
    });
  } catch (err) {
    console.error("VERIFY OTP ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Verification failed",
    });
  }
};

// ================= LOGIN =================
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const foundUserFromEmail = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!foundUserFromEmail) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    if (!foundUserFromEmail.isVerified) {
      return res.status(401).json({
        success: false,
        message: "Email not verified. Please verify your email first.",
      });
    }

    const isPasswordMatched = await bcrypt.compare(
      password,
      foundUserFromEmail.password
    );

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      {
        _id: foundUserFromEmail._id,
        firstName: foundUserFromEmail.firstName,
        email: foundUserFromEmail.email,
        role: foundUserFromEmail.role,
      },
      secret
    );

    res.status(200).json({
      success: true,
      message: "Login Success",
      token: token,
      user: {
        _id: foundUserFromEmail._id,
        firstName: foundUserFromEmail.firstName,
        lastName: foundUserFromEmail.lastName,
        email: foundUserFromEmail.email,
        role: foundUserFromEmail.role,
        profilePic: foundUserFromEmail.profilePic,
      },
    });
  } catch (err) {
    console.log("Login Error:", err);
    res.status(500).json({
      success: false,
      message: "Error while logging in",
      error: err.message,
    });
  }
};

// ================= FORGOT PASSWORD =================
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is not provided",
      });
    }

    const foundUserFromEmail = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!foundUserFromEmail) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const token = jwt.sign(
      {
        _id: foundUserFromEmail._id,
        email: foundUserFromEmail.email,
      },
      secret,
      { expiresIn: "7d" }
    );

    const url = `http://localhost:5173/resetpassword/${token}`;

    const mailHtml = `
      <div style="font-family:Arial, sans-serif; padding:20px;">
        <h2>Hi ${foundUserFromEmail.firstName},</h2>
        <p>Click the button below to reset your password.</p>
        <a href="${url}" style="display:inline-block; padding:12px 20px; background:#22d3ee; color:#0f172a; border-radius:8px; text-decoration:none; font-weight:700;">
          Reset Password
        </a>
        <p style="margin-top:16px;">If you did not request this, please ignore this email.</p>
      </div>
    `;

    await mailSend(foundUserFromEmail.email, "Reset Password Link", mailHtml);

    res.status(200).json({
      message: "Reset link has been sent to your email",
    });
  } catch (err) {
    console.log("Forgot Password Error:", err);
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};

// ================= RESET PASSWORD =================
const resetpassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const token = req.params.token;

    const decodedUser = jwt.verify(token, secret);
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await User.findByIdAndUpdate(decodedUser._id, {
      password: hashedPassword,
    });

    res.status(200).json({
      message: "Password reset successfully !!",
    });
  } catch (err) {
    console.log("Reset Password Error:", err);
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};

// ================= ADMIN FUNCTIONS =================
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ data: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
  returnDocument: "after",
});
    res.status(200).json({ data: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProfilePic = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!req.file) {
      return res.status(400).json({
        message: "Profile image is required",
      });
    }

    let finalPath = req.file.path;
    if (!finalPath.startsWith("http")) {
      finalPath = `http://localhost:${process.env.PORT || 3800}/uploads/${req.file.filename}`;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: finalPath },
      { returnDocument: "after" }
    );

    res.status(200).json({
      message: "Profile picture updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    console.log("PROFILE PIC ERROR:", err);
    res.status(500).json({
      message: "Error while updating profile picture",
      error: err.message,
    });
  }
};

const removeProfilePic = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { profilePic: "" },
      { returnDocument: "after" }
    );

    res.status(200).json({
      message: "Profile picture removed successfully",
      data: updatedUser,
    });
  } catch (err) {
    console.log("REMOVE PROFILE PIC ERROR:", err);
    res.status(500).json({
      message: "Error while removing profile picture",
      error: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  registerUser,
  verifyOtp,
  loginUser,
  forgotPassword,
  resetpassword,
  getAllUsers,
  getUserById,
  updateUser,
  updateProfilePic,
  removeProfilePic,
  deleteUser,
};
