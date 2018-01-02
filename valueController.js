var value = require('./value.js')
var mongoose = require('mongoose');

exports.getValues = function(req,res){
    value.find(function(err,values){
        if (err){
            res.send(err);
        }
        console.log(values);
        res.json(values);

    });
};
