const db = require("../models");

exports.news = async( req , res ) => {
    try {
        const news = await db.Entries.findAll({
            attributes: ['name','imageUrl','createdAt'],
            where: { categoryID:"news" }
        });
        res.status(200).send(news);
    } catch(err) {
        res.status(400).send('try again,the server could some problem in this moment');
    };
};
