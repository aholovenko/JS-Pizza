/**
 * Created by chaika on 25.01.16.
 */

$(function () {
    //This code will execute when the page is ready
    var NoodlesMenu = require('./noodles/NoodlesMenu');
    var NoodlesCart = require('./noodles/NoodlesCart');

    var Noodles_List = require('./Noodles_List');

    var API = require('./API');

    API.getNoodlesList(function (err, noodles_list) {
        if (err) {
            return concole.error(err);
        }
        console.log("Noodles_List", noodles_list);
        NoodlesCart.initialiseCart();
        NoodlesMenu.initialiseMenu();
    });


    $('#all').click(function () {
        NoodlesMenu.initialiseMenu();
    });

    $('#home').click(function () {
        window.location.reload();
    });

    $('#icon').click(function () {
        window.location.reload();
    });

    $('#meat').click(function () {
        var filter = NoodlesMenu.NoodlesFilter.Meat;
        NoodlesMenu.filterNoodles(filter);
    });

    $('#seafood').click(function () {
        var filter = NoodlesMenu.NoodlesFilter.Seafood;
        NoodlesMenu.filterNoodles(filter);
    });

    $('#vega').click(function () {
        var filter = NoodlesMenu.NoodlesFilter.Vega;
        NoodlesMenu.filterNoodles(filter);
    });

    $(".reset").click(function () {
        NoodlesCart.totalReset();
        NoodlesCart.updateCart();
    });

    $('.order').click(function () {
        window.location = "http://localhost:5050/order.html";
    });

    $('#form-to-fill-in').validate({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            title: {
                row: '.col-md-6',
                validators: {
                    notEmpty: {
                        message: 'The forename is required'
                    },
                    stringLength: {
                        max: 200,
                        message: 'The title must be less than 200 characters long'
                    }
                }
            },
            number: {
                row: '.col-md-6',
                validators: {
                    notEmpty: {
                        message: 'The number is required'
                    },
                    stringLength: {
                        max: 12,
                        message: 'The title must be less than 200 characters long'
                    }
                }
            },
            address: {
                row: '.col-md-6',
                validators: {
                    notEmpty: {
                        message: 'The address is required'
                    },
                    stringLength: {
                        max: 200,
                        message: 'The title must be less than 200 characters long'
                    }
                }
            }
        }
    });


});