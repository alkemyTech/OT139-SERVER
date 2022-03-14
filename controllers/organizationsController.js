const db = require('../models');
const { OK, BAD_REQUEST, NOT_FOUND } = require('../constants/httpCodes');

async function getFirstOrganization(req, res) {
  const organizationId = 1;

  try {
    const organization = await db.Organizations.findByPk(organizationId);
    return res.status(OK).json(organization);
  } catch (err) {
    return res.status(NOT_FOUND).json({
      error: 'Organization not found',
    });
  }
}

async function editOrganization(req, res) {
  const { id } = req.params;
  const organization = req.body;

  try {
    if (Number(id) < 0 || isNaN(id)) {
      return res.status(BAD_REQUEST).json({
        error: 'Invalid organization id',
      });
    }

    const existsOrganization = await db.Organizations.findByPk(id);

    if (!existsOrganization) {
      return res.status(NOT_FOUND).json({
        error: 'Organization not found',
      });
    }

    const updated = await db.Organizations.update({
      ...organization,
      updatedAt: Date.now(),
    },{ where: { id } });

    if (!updated) {
      return res.status(BAD_REQUEST).json({
        error: 'Organization not updated',
      });
    }

    return res.status(OK).json({
      ok: true,
    });
  } catch (err) {
    return res.status(BAD_REQUEST).json({
      error: 'Organization not updated',
    });
  }
}

module.exports = {
  getFirstOrganization,
  editOrganization,
};
