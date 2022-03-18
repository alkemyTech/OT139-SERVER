const imageUploadService = require('../services/imageUploadeService');
const { BAD_REQUEST } = require('../constants/httpCodes');

const imageUpload = (req, res, next) => {
  try {
    const file = req.file;
    const response = await imageUploadService.upload(file);

    res.send(response);
  } catch (error) {
    res
      .status(BAD_REQUEST)
      .send({ msg: 'there is an error with the server, try later' });
  }
};

module.exports = { imageUpload };
