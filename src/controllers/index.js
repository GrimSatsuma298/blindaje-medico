const newsData = require('../data/news.json')

const contoller = {
    home: (req, res) =>{
        res.render('index', {title: 'INICIO', style: 'home'});
    },
    aboutus: (req, res) =>{
        res.render('aboutus', {title: '¿Que es?', style:'aboutus'});
    },
    contact: (req, res) =>{
        res.render('contact', {title: 'CONTACTO', style:'contact'});
    },
    news: (req, res) =>{
        res.render('news', {title: 'CONTACTO', style:'news', allNews: newsData});
    }
}





module.exports = contoller;