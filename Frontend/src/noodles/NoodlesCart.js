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
var items_in_cart = 0;
var total_price = 0;

//HTML едемент куди будуть додаватися піци
var $cart = $("#cart");

function totalReset() {
    Cart = [];
    items_in_cart = 0;
    total_price = 0;
    check();
}

function addToCart(noodles, size) {
    //Додавання однієї піци в кошик покупок
    var added = true;

    Cart.forEach(function (cart_item) {
        if ((cart_item.noodles.id == noodles.id) && (cart_item.size == size)) {
            added = false;
            cart_item.quantity += 1;
            items_in_cart += 1;
            total_price += cart_item.noodles[cart_item.size].price;
        }
    });

    //Приклад реалізації, можна робити будь-яким іншим способом
    if (added == true) {
        Cart.push({
            noodles: noodles,
            size: size,
            quantity: 1
        });
        items_in_cart += 1;
        total_price += noodles[size].price;
    }

    //Оновити вміст кошика на сторінці
    updateCart();
}

function removeFromCart(cart_item) {
    //Видалити піцу з кошика

    Cart.splice(Cart.indexOf(cart_item), 1);
    items_in_cart -= cart_item.quantity;
    total_price -= (cart_item.noodles[cart_item.size].price) * (cart_item.quantity);
    //Після видалення оновити відображення
    updateCart();
}

function initialiseCart() {
    //Фукнція віпрацьвуватиме при завантаженні сторінки
    //Тут можна наприклад, зчитати вміст корзини який збережено в Local Storage то показати його

    var saved_noodles = Storage.get("cart");
    if (saved_noodles) {
        Cart = saved_noodles;
        Cart.forEach(function (item) {
            items_in_cart += item.quantity;
            total_price += (item.noodles[item.size].price) * (item.quantity);
        });
    }
    updateCart();
}

function getNoodlesInCart() {
    //Повертає піци які зберігаються в кошику
    return Cart;
}

function check(){
    if (total_price == 0) {
        $('#sum').hide();
        $('.total-price').hide();
        $('.order').prop("disabled", true);
        $('#motivation').show();
    } else {
        $('#sum').show();
        $('.total-price').show();
        $('.order').prop("disabled", false);
        $('#motivation').hide();
    }
}

function updateCart() {
    //Функція викликається при зміні вмісту кошика
    //Тут можна наприклад показати оновлений кошик на екрані та зберегти вміт кошика в Local Storage

    //Очищаємо старі піци в кошику
    $cart.html("");

    $('.badge-rp').text(items_in_cart);
    $('.total-price').text(total_price + " грн.");

    check();

    //Онволення однієї піци
    function showOneNoodlesInCart(cart_item) {
        var html_code = Templates.NoodlesCart_OneItem(cart_item);

        var $node = $(html_code);

        $node.find(".plus").click(function () {
            //Збільшуємо кількість замовлених піц
            cart_item.quantity += 1;
            items_in_cart += 1;
            total_price += cart_item.noodles[cart_item.size].price;
            //Оновлюємо відображення
            updateCart();
        });

        $node.find(".minus").click(function () {
            //Збільшуємо кількість замовлених піц
            if (cart_item.quantity > 1) {
                cart_item.quantity -= 1;
                items_in_cart -= 1;
                total_price -= cart_item.noodles[cart_item.size].price;
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
exports.totalReset = totalReset;

exports.updateCart = updateCart;

exports.getNoodlesInCart = getNoodlesInCart;
exports.initialiseCart = initialiseCart;

exports.NoodlesSize = NoodlesSize;