/**
 * Created by diana on 12.01.16.
 */

var noodles_info = [
    {
        id: 1,
        icon: 'assets/images/box_1.png',
        title: 'Бокс "Чорний Боб"',
        type: "З м'ясом",
        content: {
            meat: ['курка, яловичина'],
            additional: ['яйце'],
            vegetables: ['перець болгарський', 'брокколі', 'мікс-овочі'],
            sauce: ['соус з чорних бобів']
        },
        spicy_icon: 'assets/images/not-spicy.jpg',
        both_sizes: true,
        small_size: {
            weight: 260,
            size: 30,
            price: 78
        },
        big_size: {
            weight: 480,
            size: 40,
            price: 127
        },
        is_new: true
    },

    {
        id: 2,
        icon: 'assets/images/box_3.png',
        title: 'Бокс "Мі-Гі"',
        type: 'З морепродуктами',
        content: {
            seafood: ['креветки', 'кальмари'],
            additional: ['тофу'],
            vegetables: ['брокколі', 'мікс-овочі'],
            sauce: ['Малазійський соус']
        },
        spicy_icon: 'assets/images/spicy.jpg',
        both_sizes: true,
        small_size: {
            weight: 240,
            size: 30,
            price: 126
        },
        big_size: {
            weight: 450,
            size: 40,
            price: 199
        },
        is_popular: true
    },

    {
        id: 3,
        icon: 'assets/images/box_5.png',
        title: 'Бокс "Чілійський"',
        type: "З м'ясом",
        content: {
            meat: ['курка', 'свинина'],
            additional: ['тофу'],
            vegetables: ['брокколі', 'помідори'],
            sauce: ['солодко-гострий соус']
        },
        spicy_icon: 'assets/images/spicy.jpg',
        both_sizes: true,
        small_size: {
            weight: 270,
            size: 30,
            price: 85
        },
        big_size: {
            weight: 490,
            size: 40,
            price: 145
        }
    },

    {
        id: 4,
        icon: 'assets/images/box_6.png',
        title: 'Бокс "Індонезійський стайл"',
        type: "З м'ясом",
        content: {
            meat: ['свинина', 'салямі'],
            seafood: ['креветки'],
            vegetables: ['горошок', 'перець болгарський', 'брокколі', 'мікс-овочі'],
            additional: ['яйце', 'Індонезійська приправа']
        },
        spicy_icon: 'assets/images/spicy.jpg',
        both_sizes: true,
        small_size: {
            weight: 300,
            size: 30,
            price: 105
        },
        big_size: {
            weight: 500,
            size: 40,
            price: 164
        }
    },

    {
        id: 5,
        icon: 'assets/images/box_7.png',
        title: 'Бокс "Океанські смаколики"',
        type: 'З морепродуктами',
        content: {
            seafood: ['креветки', 'кальмари', 'восьминіг'],
            vegetables: ['горошок', 'перець болгарський', 'брокколі', 'мікс-овочі'],
            additional: ['яйце', 'Індонезійська приправа']
        },
        spicy_icon: 'assets/images/spicy.jpg',
        big_size_only: true,
        big_size: {
            weight: 480,
            size: 40,
            price: 225
        }
    },

    {
        id: 6,
        icon: 'assets/images/box_8.png',
        title: 'Бокс "Солодко-кислий"',
        type: "З м'ясом",
        content: {
            meat: ['курка', 'яловичина'],
            vegetables: ['брокколі', 'перець зелений болгарський', 'мікс-овочі'],
            sauce: ['солодко-кислий соус']
        },
        spicy_icon: 'assets/images/not-spicy.jpg',
        both_sizes: true,
        small_size: {
            weight: 290,
            size: 30,
            price: 90
        },
        big_size: {
            weight: 530,
            size: 40,
            price: 135
        }
    },

    {
        id: 7,
        icon: 'assets/images/box_9.png',
        title: 'Бокс "Тайський карі"',
        type: "З м'ясом",
        content: {
            meat: ['яловичина', 'курка'],
            seafood: ['креветки'],
            vegetables: ['брокколі', 'мікс-овочі'],
            sauce: ['автентичний Тайський соус карі']
        },
        spicy_icon: 'assets/images/spicy.jpg',
        small_size_only: true,
        small_size: {
            weight: 320,
            size: 30,
            price: 100
        }
    },

    {
        id: 8,
        icon: 'assets/images/box_10.png',
        title: 'Бокс "Вегі"',
        type: ['Вегі'],
        content: {
            vegetables: ['брокколі', 'мікс-овочі', 'помідори', 'гриби'],
            sauce: ['наш особливий соус'],
            additional: ['тофу', 'ананаси']
        },
        spicy_icon: 'assets/images/not-spicy.jpg',
        both_sizes: true,
        small_size: {
            weight: 300,
            size: 30,
            price: 95
        },
        big_size: {
            weight: 480,
            size: 40,
            price: 140
        }
    }
];

module.exports = noodles_info;