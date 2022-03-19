const db = require('../models');
const { OK, BAD_REQUEST } = require('../constants/httpCodes');

exports.testimonialsDelete = async (req , res) => {
    const { id } = req.params;
    try {
        const testimonialFind = await db.Testimonials.findByPk(id);

        if(!testimonialFind) {
           return res.status(BAD_REQUEST).send({msg:'Testimonio no encontrado'});
        };

        await db.Testimonials.destroy({
            where: {
                id
            }
        });

        res.status(OK).send({msg:'Testimonio eliminado exitosamente'});
        
    } catch(error) {
        res.status(BAD_REQUEST).send({msg:'Algo salio mal al intentar eliminar el testimonio'});
    }

}

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
