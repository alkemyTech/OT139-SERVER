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

