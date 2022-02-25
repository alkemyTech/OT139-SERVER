const awsServices = require('./aws');

const upload = (file) => {
  const result = awsServices.uploadFile(file);

  const response = {
    url: result.Location,
    key: result.Key
  };

  return response;
};

module.exports = { upload };