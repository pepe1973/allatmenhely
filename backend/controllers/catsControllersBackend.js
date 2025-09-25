const Cat = require('../models/Cat.js');

exports.getAllCatsBackend = async function (req, res) {
    try {
        const cats = await Cat.find({});
        res.statusCode = 200;
        return res.render('cats.ejs', {cats}); 
    } catch (error) {
        res.statusCode = 500;
        return res.render('server-error.ejs');
    }
};