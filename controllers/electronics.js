var Electronic = require('../models/electronics');
// List of all Electronics

exports.electronic_list = async function (req, res) {
    try {
        theElectronics = await Electronic.find();
        res.send(theElectronics);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Electronic.
exports.electronic_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronic detail: ' + req.params.id);
};
// Handle Electronic create on POST.
exports.electronic_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronic create POST');
};
// Handle Electronic delete form on DELETE.
exports.electronic_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronic delete DELETE ' + req.params.id);
};
// Handle Electronic update form on PUT.
exports.electronic_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronic update PUT' + req.params.id);
};
exports.electronic_view_all_Page = async function (req, res) {
    try {
        theElectronics = await Electronic.find();
        res.render('electronics', { title: 'Electronic Search Results', results: theElectronics });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.electronic_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Electronic();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"electronic_type":"goat", "cost":12, "size":"large"}
    document.Electronic_Name = req.body.Electronic_Name;
    document.Electronic_Origin = req.body.Electronic_Origin;
    document.Electronic_ManufacturingYear = req.body.Electronic_ManufacturingYear;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

