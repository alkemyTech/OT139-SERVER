const awsServices = require('./awsServices');

const upload = (file) => {
  const { location, key } = awsServices.uploadFile(file);

  const response = {
    url: location,
    key: key
  };

  return response;
};

module.exports = { upload };