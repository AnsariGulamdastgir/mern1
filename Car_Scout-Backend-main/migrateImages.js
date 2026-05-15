require("dotenv").config();
const mongoose = require("mongoose");
const cloudinary = require("./src/utils/CloudinaryUtil");
const Car = require("./src/models/CarModel");
const User = require("./src/models/UserModel");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "uploads");

const uploadToCloudinary = async (filePath, folder) => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found on disk: ${filePath}`);
      return null;
    }
    const result = await cloudinary.uploader.upload(filePath, { folder: folder });
    return result.secure_url;
  } catch (error) {
    console.error(`Cloudinary upload failed for ${filePath}:`, error.message);
    return null;
  }
};

const getFileNameFromUrl = (url) => {
  if (!url) return null;
  const parts = url.split("/");
  return parts[parts.length - 1];
};

const fixCars = async () => {
  console.log("Starting Car image migration...");
  const cars = await Car.find({});
  for (let car of cars) {
    let updated = false;
    let newImages = [];
    
    if (car.images && car.images.length > 0) {
      for (let img of car.images) {
        if (img.includes("onrender.com") || img.includes("localhost")) {
          const filename = getFileNameFromUrl(img);
          const localFilePath = path.join(uploadDir, filename);
          console.log(`Migrating car image: ${filename}`);
          
          const cloudUrl = await uploadToCloudinary(localFilePath, "carscout_cars");
          if (cloudUrl) {
            newImages.push(cloudUrl);
            updated = true;
          } else {
            // keep old if upload fails or file missing
            newImages.push(img);
          }
        } else {
          // already a cloudinary or valid URL
          newImages.push(img);
        }
      }
    }
    
    if (updated) {
      car.images = newImages;
      await car.save();
      console.log(`✅ Updated Car: ${car.model}`);
    }
  }
};

const fixUsers = async () => {
  console.log("Starting User profile picture migration...");
  const users = await User.find({});
  for (let user of users) {
    if (user.profilePic && (user.profilePic.includes("onrender.com") || user.profilePic.includes("localhost"))) {
      const filename = getFileNameFromUrl(user.profilePic);
      const localFilePath = path.join(uploadDir, filename);
      console.log(`Migrating profile pic: ${filename}`);
      
      const cloudUrl = await uploadToCloudinary(localFilePath, "carscout_profiles");
      if (cloudUrl) {
        user.profilePic = cloudUrl;
        await user.save();
        console.log(`✅ Updated User: ${user.firstName}`);
      }
    }
  }
};

const runMigration = async () => {
  try {
    console.log("Connecting to DB...");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB!");
    
    await fixCars();
    await fixUsers();
    
    console.log("🎉 Migration completed successfully!");
  } catch (error) {
    console.error("Migration Error:", error);
  } finally {
    mongoose.disconnect();
  }
};

runMigration();
