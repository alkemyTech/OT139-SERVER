const imageUploadService = require('../services/imageUploadeService');

const imageUpload = (req, res, next) => {
  try {
    const file = req.file;
    const response = await imageUploadService.upload(file);

    res.send(response);
  } catch (error) {
    next(error);
  }

  res.send(response);
};

module.exports = { imageUpload };
