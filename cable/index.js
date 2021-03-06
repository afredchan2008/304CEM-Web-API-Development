const express = require('express');
const router = express.Router();
const{ensureAuthenticated} = require('../config/auth');

router.get('/',(req, res) => res.render('introduction'));
router.get('/home_page',ensureAuthenticated, (req, res) => res.render('home_page', {
    name: req.user.name,
}));

router.get('/second_page', (req, res) => res.render('second_page', {
    comment: req.daily.comment
}));

module.exports = router;


