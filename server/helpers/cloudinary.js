const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name:'dl01dyw8n',
    api_key:'432396169763256',
    api_secret:'UA0_V2x8mISRhdIbHYSLsnYr2rA'

})

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}

const upload = multer({ storage });
module.exports = { upload, imageUploadUtil };
