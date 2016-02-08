/**
 * Created by chaika on 02.02.16.
 */

var Templates = require('../Templates');
var Storage = require('../Storage');

//Перелік розмірів піци
var NoodlesSize = {
    Big: "big_size",
    Small: "small_size"
};

//Змінна в якій зберігаються перелік піц в кошику
var Cart = [];
var totalPrice;

//HTML едемент куди будуть додаватися піци
var $cart = $("#cart");

function totalReset(){
    Cart=[];
}

function addToCart(noodles, size) {
    //Додавання однієї піци в кошик покупок

    for (var i = 0; i < Cart.length; i++) {
        if ((Cart[i].noodles == noodles) && (Cart[i]).size == size) {
            Cart[i].quantity += 1;
            updateCart();
            return;
        }
    }

    //Приклад реалізації, можна робити будь-яким іншим способом
    Cart.push({
        noodles: noodles,
        size: size,
        quantity: 1
    });

    //Оновити вміст кошика на сторінці
    updateCart();
}

function removeFromCart(cart_item) {
    //Видалити піцу з кошика

    Cart.splice(Cart.indexOf(cart_item), 1);

    //Після видалення оновити відображення
    updateCart();
}

function initialiseCart() {
    //Фукнція віпрацьвуватиме при завантаженні сторінки
    //Тут можна наприклад, зчитати вміст корзини який збережено в Local Storage то показати його

    var saved_noodles = Storage.get("cart");
    if (saved_noodles) {
        Cart = saved_noodles;
    }

    updateCart();
}

function getNoodlesInCart() {
    //Повертає піци які зберігаються в кошику
    return Cart;
}

function updateCart() {
    //Функція викликається при зміні вмісту кошика
    //Тут можна наприклад показати оновлений кошик на екрані та зберегти вміт кошика в Local Storage

    //Очищаємо старі піци в кошику
    $cart.html("");

    //Онволення однієї піци
    function showOneNoodlesInCart(cart_item) {
        var html_code = Templates.NoodlesCart_OneItem(cart_item);

        var $node = $(html_code);

        $node.find(".plus").click(function () {
            //Збільшуємо кількість замовлених піц
            cart_item.quantity += 1;

            //Оновлюємо відображення
            updateCart();
        });

        $node.find(".minus").click(function () {
            //Збільшуємо кількість замовлених піц
            if (cart_item.quantity > 1) {
                cart_item.quantity -= 1;
            } else {
                removeFromCart(cart_item);
            }

            //Оновлюємо відображення
            updateCart();
        });

        $node.find(".cross").click(function () {
            removeFromCart(cart_item);

            updateCart();
        });

        $cart.append($node);
    }

    Cart.forEach(showOneNoodlesInCart);
    Storage.set("cart", Cart);//
}

exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;
exports.totalReset=totalReset;

exports.updateCart=updateCart;

exports.getNoodlesInCart = getNoodlesInCart;
exports.initialiseCart = initialiseCart;

exports.NoodlesSize = NoodlesSize;