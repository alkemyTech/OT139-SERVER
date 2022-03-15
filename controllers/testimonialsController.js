const db = require('../models');
const { OK, BAD_REQUEST } = require('../constants/httpCodes');

exports.testimonialsUpdate = async (req, res) => {
    const { name, image, content } = req.body;

    const testimonial = await db.Testimonials.findOne({ where: { id: req.params.id } });

    if (!testimonial) {
      return res.status(BAD_REQUEST).json({
        ok: false,
        msg: 'El testimonio no fue encontrado.',
      })
    };

    await db.Testimonials.update({
        name,
        image,
        content
    }, { 
        where: { id: req.params.id } 
    })
    .then((result) => res.status(OK).json({
        ok: true,
        msg: 'El testimonio fue editado con exito.',
        result: { ...result }
    }))
    .catch((error) => {
        res.status(BAD_REQUEST).json({
        ok: false,
        msg: 'El testimonio no puede ser editado',
        error: error
        })
    })

    return null
}