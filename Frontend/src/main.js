/**
 * Created by chaika on 25.01.16.
 */

$(function () {
    //This code will execute when the page is ready
    var NoodlesMenu = require('./noodles/NoodlesMenu');
    var NoodlesCart = require('./noodles/NoodlesCart');

    var Noodles_List = require('./Noodles_List');

    NoodlesCart.initialiseCart();
    NoodlesMenu.initialiseMenu();

    $('#all').click(function(){
        NoodlesMenu.initialiseMenu();
    });

    $('#home').click(function(){
        NoodlesMenu.initialiseMenu();
    });

    $('#icon').click(function(){
        NoodlesMenu.initialiseMenu();
    });

    $('#meat').click(function(){
        var filter	=	NoodlesMenu.NoodlesFilter.Meat;
        NoodlesMenu.filterNoodles(filter);
    });

    $('#seafood').click(function(){
        var filter	=	NoodlesMenu.NoodlesFilter.Seafood;
        NoodlesMenu.filterNoodles(filter);
    });

    $('#vega').click(function(){
        var filter	=	NoodlesMenu.NoodlesFilter.Vega;
        NoodlesMenu.filterNoodles(filter);
    });

    $(".reset").click(function(){
        NoodlesCart.totalReset();
        NoodlesCart.updateCart();
    });

  //  $(".total-price").text(PizzaCart.priceCalc()+" грн.");

});