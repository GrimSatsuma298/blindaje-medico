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
    },
    message: (req, res) =>{
        //  Making POST method to Flask Server
        httpRequest({
            method:'POST',
            form: {message:req.body.message},
            url: 'http://localhost:3002/bot/response'
        }, function (err, postRes, body) {
            if (err) {
            res.end( JSON.stringify( err ) );
            }
            else {
            console.log("******************ANSWER******************")
            console.log(body)
            res.end(  body  );
            }
        });
    }
}





module.exports = contoller;