var express = require('express');
var value = require('./valueController');
var router = express.Router();

router.get('/values', function(req, res) {
    value.getValues(req,res);
});
module.exports = router;
