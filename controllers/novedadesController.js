const db = require('../models');

module.exports = {
    updated: (req, res) => {
        db.New.update({
            name: req.body.name,
            content: req.body.content,
            image: req.file.filename,
            categoryId: req.body.categoryId,
            type: req.body.type
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            let resultado = {
                meta: {
                    status: 201,
                    total: result.length,
                    url: '/news/update/' + req.params.id
                },
                data: result
            }
            res.json(resultado)
        })
        .catch(error => console.log(error));
    }
}