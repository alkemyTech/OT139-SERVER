const HTTP_CODES = require("../constants/httpCodes");
const { USER } = require("../constants/user");

function isAdmin (req, res, next){
  return req.session?.user?.roleId === USER.ROLE.ADMIN
    ? next()
    : res.status(HTTP_CODES.FORBIDDEN).json({
        error: 'You don\'t have priveleges to access this resource',
      });
}

module.exports = {
  isAdmin
}