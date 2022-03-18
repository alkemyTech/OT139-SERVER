const db = require('../models');
const {
  OK,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} = require('../constants/httpCodes');

exports.testimonialsUpdate = async (req, res) => {
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
};
