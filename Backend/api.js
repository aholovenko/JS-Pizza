/**
 * Created by chaika on 09.02.16.
 */
var Noodles_List = require('./data/Noodles_List');

exports.getNoodlesList = function(req, res) {
    res.send(Noodles_List);
};

exports.createOrder = function(req, res) {
    var order_info = req.body;
    console.log("Creating Order", order_info);
    res.send({
        success: true
    });
};