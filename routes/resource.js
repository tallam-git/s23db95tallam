var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var electronic_controller = require('../controllers/electronics');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Electronic.
router.post('/electronics', electronic_controller.electronic_create_post);
// DELETE request to delete Electronic.
router.delete('/electronics/:id', electronic_controller.electronic_delete);
// PUT request to update Electronic.
router.put('/electronics/:id', electronic_controller.electronic_update_put);
// GET request for one Electronic.
router.get('/electronics/:id', electronic_controller.electronic_detail);
// GET request for list of all Electronic items.
router.get('/electronics', electronic_controller.electronic_list);
module.exports = router;