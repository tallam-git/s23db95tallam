var express = require('express');
var router = express.Router();

/* GET home page. */
const electronic_controlers= require('../controllers/electronics');
router.get('/', electronic_controlers.electronic_view_all_Page);

module.exports = router;
