/**
 * Created by chaika on 25.01.16.
 */
/*НЕ ПИШЕМО КОД.*/
$(function () {
    //This code will execute when the page is ready
    var PizzaMenu = require('./noodles/NoodlesMenu');
    var PizzaCart = require('./noodles/NoodlesCart');

    var Pizza_List = require('./Noodles_List');

    PizzaCart.initialiseCart();
    PizzaMenu.initialiseMenu();

});