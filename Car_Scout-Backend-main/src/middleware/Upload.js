const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/CloudinaryUtil");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "carscout_cars", // The folder name in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ width: 1000, crop: "limit" }] // Optional resizing
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB per file
});

module.exports = upload;