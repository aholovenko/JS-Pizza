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

//HTML едемент куди будуть додаватися піци
var $cart = $("#cart");

function addToCart(noodles, size) {
    //Додавання однієї піци в кошик покупок

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
    //TODO: треба зробити

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
            if(cart_item.quantity>1){
            cart_item.quantity -= 1;
            }

            //Оновлюємо відображення
            updateCart();
        });

        $cart.append($node);
    }

    Cart.forEach(showOneNoodlesInCart);
    Storage.set("cart", Cart);//
}

exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;

exports.getNoodlesInCart = getNoodlesInCart;
exports.initialiseCart = initialiseCart;

exports.NoodlesSize = NoodlesSize;