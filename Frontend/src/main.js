/**
 * Created by chaika on 25.01.16.
 */

$(function () {
    //This code will execute when the page is ready
    var NoodlesMenu = require('./noodles/NoodlesMenu');
    var NoodlesCart = require('./noodles/NoodlesCart');

    var Noodles_List = require('./Noodles_List');

    require('./googleMap');

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


    $("#forename").focusout(function () {
        if ($("#forename").val() == "" || /^[0-9]+$/.test($("#forename").val())) {
            console.log(/[0-9]+!@$%^&*-_=\?.,/.test($("#forename").val()));
            $(".fname").find(".status").attr("class", "has-error");
            $(".fname").find(".help-block").css("display", "inline");
            $(".fname").find("#forename").after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
        } else {
            $(".fname").find(".status").attr("class", "has-success");
            $(".fname").find("#forename").after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
        }
    });

    $("#forename").focusin(function () {
        $(".fname").find(".has-error").attr("class", "status");
        $(".fname").find(".has-success").attr("class", "status");
        $(".fname").find(".glyphicon-remove").css("display", "none");
        $(".fname").find(".glyphicon-ok").css("display", "none");
        $(".fname").find(".help-block").css("display", "none");
    });

    $("#number").focusout(function () {
        if ($("#number").val() == "" || ($("#number").val().includes("+380")) == false || $("#number").val().length != 13 || !/[0-9]+/.test($("#number").val())) {
            $(".num").find(".status").attr("class", "has-error");
            $(".num").find(".help-block").css("display", "inline");
            $(".num").find("#number").after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
        } else {
            $(".num").find(".status").attr("class", "has-success");
            $(".num").find("#number").after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
        }
    });

    $("#number").focusin(function () {
        $(".num").find(".has-error").attr("class", "status");
        $(".num").find(".has-success").attr("class", "status");
        $(".num").find(".glyphicon-remove").css("display", "none");
        $(".num").find(".glyphicon-ok").css("display", "none");
        $(".num").find(".help-block").css("display", "none");
    });

    $('.next').click(function () {
        API.createOrder(
            {
                name: $("#forename").val(),
                phone: $("#phone").val(),
                noodles: NoodlesCart.getNoodlesInCart()
            },
            function (err, result) {
                if (err) {
                    alert("Can't create order");
                } else {
                    LiqPayCheckout.init({
                        data: result.data,
                        signature: result.signature,
                        embedTo: "#liqpay",
                        mode: "popup"
                    }).on("liqpay.callback", function (data) {
                        console.log(data.status);
                        console.log(data);
                    }).on("liqpay.ready", function (data) {
                    }).on("liqpay.close", function (data) {
                    });
                }
            });

    })
});