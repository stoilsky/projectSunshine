var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('are we here??');
    res.render('about', {title: 'Project Sunshine'});
});

module.exports = router;
