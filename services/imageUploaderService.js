const awsServices = require('./awsServices');

const upload = async (file) => {
  const result = await awsServices.uploadFile(file);

  const response = {
    url: result.location,
    key: result.key
  };

  return response;
};

module.exports = { upload };