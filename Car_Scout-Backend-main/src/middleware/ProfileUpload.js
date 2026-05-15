const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/CloudinaryUtil");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "carscout_profiles", // The folder name in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ width: 400, height: 400, crop: "fill" }] // Square crop for profiles
  },
});

const profileUpload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit for profile pics
});

module.exports = profileUpload;
