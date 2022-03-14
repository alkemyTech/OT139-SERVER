const db = require('../models');
const { OK, NOT_FOUND } = require('../constants/httpCodes');

async function getFirstOrganization(req, res) {
  const organizationId = 1;

  try {
    const organization = await db.Organizations.findByPk(organizationId);
    return res.status(OK).json(organization);
  } catch(err) {
    return res.status(NOT_FOUND).json({
      error: 'Organization not found'
    })
  }
}

module.exports = {
  getFirstOrganization,
}