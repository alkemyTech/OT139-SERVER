const db = require('../models');

const updated = async (req, res) => {
    try {
        db.Entries.update({
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
        .catch(error => {
            res.status(404).json({Error: error})
        });
    } catch (error) {
        res.status(404).json({Error: error})
    }
        
    }

    module.exports = updated