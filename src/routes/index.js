var express = require('express');
var router = express.Router();
const mainController = require('../controllers/index')

/* GET home page. */
router.get('/', mainController.home);

/* GET About us page */
router.get('/nosotros', mainController.aboutus)

router.get('/contacto', mainController.contact)

router.get('/noticias', mainController.news)

module.exports = router;
