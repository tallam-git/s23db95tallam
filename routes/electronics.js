var express = require('express');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    console.log(req.session.returnTo);
    res.redirect("/login");
}
/* GET home page. */
const electronic_controlers= require('../controllers/electronics');
router.get('/', electronic_controlers.electronic_view_all_Page);
router.get('/detail', electronic_controlers.electronic_view_one_Page);
/* GET create electronic page */
router.get('/create',secured, electronic_controlers.electronic_create_Page);
router.get('/update',secured, electronic_controlers.electronic_update_Page);
router.get('/delete',secured, electronic_controlers.electronic_delete_Page);
module.exports = router;
