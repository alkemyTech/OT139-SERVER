const db = require('../models');
const {
  OK,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
} = require('../constants/httpCodes');

async function getTestimonials(req, res) {
  try {
    const testimonials = await db.Testimonials.findAll();

    if (!testimonials?.length) {
      res.status(NOT_FOUND).json({
        error: 'Testimonials not found',
      });
    }

    res.status(OK).json(testimonials);
  } catch (err) {
    res.status(BAD_REQUEST).json({
      error: 'Testimonials not found',
    });
  }
}

async function testimonialsUpdate(req, res) {
  const { name, image, content } = req.body;

  try {
    const testimonial = await db.Testimonials.findOne({
      where: { id: req.params.id },
    });

    if (!testimonial) {
      return res.status(BAD_REQUEST).json({
        ok: false,
        msg: 'El testimonio no fue encontrado.',
      });
    }

    const testimonialUpdate = await db.Testimonials.update(
      {
        name,
        image,
        content,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(OK).json({
      ok: true,
      msg: 'El testimonio fue editado con exito.',
      result: { ...testimonialUpdate },
    });
  } catch (errors) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: 'Error creating contact.',
      error: errors,
    });
  }
}
async function testimonialsCreate(req, res) {
  const { name, image, content } = req.body;

  const fieldsComplete = name || content;
  if (!fieldsComplete) {
    res
      .status(BAD_REQUEST)
      .json({ error: 'Falta completar alguno de los campos' });
  }
  try {
    await db.Testimonials.create({
      name,
      image,
      content,
    });
    res.status(OK).json({ ok: true });
  } catch (error) {
    res.status(BAD_REQUEST).json(error);
  }
}

module.exports = {
  testimonialsCreate,
  testimonialsUpdate,
  getTestimonials,
};
