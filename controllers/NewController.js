const db = require("../models");

exports.news = function (req, res) {
    try {
        db.Entries.findAll({
            attributes: ['name','imageUrl','createdAt'],
            where: { categoryID:"news" }
        }).then(async function (news) {
            res.send(news)
        });
    }catch(err){
        console.log(err)
        res.status(400).send('try again,the server could some problem in this moment');
    };
};