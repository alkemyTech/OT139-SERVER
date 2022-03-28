const imageUploadService = require('../services/imageUploaderService');
const { BAD_REQUEST } = require('../constants/httpCodes');

const imageUpload = async (req, res, next) => {
  try {
    const file = req.file;
    const response = await imageUploadService.upload(file);

    console.log(response);
    res.send(response);
  } catch (error) {
    res
      .status(BAD_REQUEST)
      .send({ msg: 'there is an error with the server, try later' });
  }
};

module.exports = { imageUpload };
