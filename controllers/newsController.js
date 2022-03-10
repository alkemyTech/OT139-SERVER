const { OK, BAD_REQUEST } = require('../constants/httpCodes');
const db = require('../models');

const update = async (req, res) => {
    try {
        await db.Entries.update({
            name: req.body.name,
            content: req.body.content,
            imageUrl: req.file.filename,
            categoryId: req.body.categoryId,
            type: req.body.type
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(OK).send("Datos actualizados correctamente")
    } catch (error) {
        res.status(BAD_REQUEST).send({ msg: "Ocurrio un error al actualizar los datos" })
        console.log(error)
    }
}

module.exports = update