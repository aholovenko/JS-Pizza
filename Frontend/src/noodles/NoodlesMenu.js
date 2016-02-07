/**
 * Created by chaika on 02.02.16.
 */
var Templates = require('../Templates');
var NoodlesCart = require('./NoodlesCart');
var Noodles_List = require('../Noodles_List');

//HTML едемент куди будуть додаватися піци
var $noodles_list = $("#noodles_list");

function showNoodlesList(list) {
    //Очищаємо старі піци в кошику
    $noodles_list.html("");

    //Онволення однієї піци
    function showOneNoodles(noodles) {
        var html_code = Templates.NoodlesMenu_OneItem({noodles: noodles});

        var $node = $(html_code);

        $node.find(".buy-big").click(function(){
            NoodlesCart.addToCart(noodles, NoodlesCart.NoodlesSize.Big);
        });
        $node.find(".buy-small").click(function(){
            NoodlesCart.addToCart(noodles, NoodlesCart.NoodlesSize.Small);
        });

        $noodles_list.append($node);
    }

    list.forEach(showOneNoodles);
}

function filterNoodles(filter) {
    //Масив куди потраплять піци які треба показати
    var noodles_shown = [];

    Noodles_List.forEach(function(noodles){
        //Якщо піца відповідає фільтру
        //noodles_shown.push(noodles);

        //TODO: зробити фільтри
    });

    //Показати відфільтровані піци
    showNoodlesList(noodles_shown);
}

function initialiseMenu() {
    //Показуємо усі піци
    showNoodlesList(Noodles_List)
}

exports.filterNoodles = filterNoodles;
exports.initialiseMenu = initialiseMenu;