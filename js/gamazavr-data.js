/**
 * Created by Arkadiy on 16.11.2015.
 */

var targetGoods = [
    {
        link: 'http://gamazavr.ru/product/14687379/',
        image: 'http://gamazavr.ru/media/products/profile/23878/198_89.jpg/thumb198/',
        title: 'Call of Duty®: Black Ops III. Nuketown Edition',
        price: '2599',
        old: '2799',
        id: '1'
    },
    {
        link: 'http://gamazavr.ru/product/14687976/',
        image: 'http://gamazavr.ru/media/products/profile/24561/198_89.jpg/thumb198/',
        title: 'StarCraft II: Legacy of the Void',
        price: '1349',
        old: '1499',
        id: '2'
    },
    {
        link: 'http://gamazavr.ru/product/14685938/',
        image: 'http://gamazavr.ru/media/products/profile/22854/198_89_sm5PBoL.jpg/thumb198/',
        title: 'Total War™: WARHAMMER®. Предзаказ',
        price: '1999',
        old: '',
        id: '3'
    },
    {
        link: 'http://gamazavr.ru/product/14687314/',
        image: 'http://gamazavr.ru/media/products/profile/23808/198_89.jpg/thumb198/',
        title: 'Guild Wars 2: Heart of Thorns',
        price: '2649',
        old: '',
        id: '4'
    },
    {
        link: 'http://gamazavr.ru/product/14687338/',
        image: 'http://gamazavr.ru/media/products/profile/23827/198_89.jpg/thumb198/',
        title: 'Guild Wars 2: Heart of Thorns. Digital Deluxe',
        price: '4249',
        old: '',
        id: '5'
    },
    {
        link: 'http://gamazavr.ru/product/14686519/',
        image: 'http://gamazavr.ru/media/products/profile/23313/198_89_4IdfHi7.jpg/thumb198/',
        title: 'Fallout 4',
        price: '1799',
        old: '1999',
        id: '6'
    },
    {
        link: 'http://gamazavr.ru/product/14747681/',
        image: 'http://gamazavr.ru/media/products/profile/79627/300_135_9fBWVj8.jpg/thumb198/',
        title: 'Fallout 4 Season Pass',
        price: '1399',
        old: '1499',
        id: '7'
    },
    {
        link: 'http://gamazavr.ru/product/14751647/',
        image: 'http://gamazavr.ru/media/products/profile/83656/198_89.jpg/thumb198/',
        title: 'Tales of Zestiria',
        price: '999',
        old: '',
        id: '8'
    },
    {
        link: 'http://gamazavr.ru/product/14685247/',
        image: 'http://gamazavr.ru/media/products/profile/20434/300_135_1.jpg/thumb198/',
        title: 'EVE Online: Базовый набор «Пилот-выпускник»',
        price: '149',
        old: '599',
        id: '9'
    },
    {
        link: 'http://gamazavr.ru/product/14747746/',
        image: 'http://gamazavr.ru/media/products/profile/85179/198_89.jpg/thumb198/',
        title: 'The Park',
        price: '539',
        old: '',
        id: '10'
    },
    {
        link: 'http://gamazavr.ru/product/14739817/',
        image: 'http://gamazavr.ru/media/products/profile/71671/198_89.jpg/thumb198/',
        title: 'Saint Seiya: Soldiers&prime; Soul. Предзаказ',
        price: '999',
        old: '',
        id: '11'
    },
    {
        link: 'http://gamazavr.ru/product/14688553/',
        image: 'http://gamazavr.ru/media/products/profile/24928/198_90_DKSiyy8.jpg/thumb198/',
        title: 'Blood Bowl 2',
        price: '469',
        old: '899',
        id: '12'
    },
    {
        link: 'http://gamazavr.ru/product/14747751/',
        image: 'http://gamazavr.ru/media/products/profile/79721/198_89.jpg/thumb198/',
        title: 'Ведьмак 3: Дикая Охота – Каменные Сердца',
        price: '399',
        old: '',
        id: '13'
    },
    {
        link: 'http://gamazavr.ru/product/14687351/',
        image: 'http://gamazavr.ru/media/products/profile/23849/198_89_xdYJiyc.jpg/thumb198/',
        title: 'Metal Gear Solid V: The Phantom Pain',
        price: '1399',
        old: '',
        id: '14'
    },
    {
        link: 'http://gamazavr.ru/product/14748679/',
        image: 'http://gamazavr.ru/media/products/profile/83655/198_89.jpg/thumb198/',
        title: 'Minecraft: Story Mode – A Telltale Games Series',
        price: '449',
        old: '',
        id: '15'
    },
    {
        link: 'http://gamazavr.ru/product/14687286/',
        image: 'http://gamazavr.ru/media/products/profile/23754/198_89.jpg/thumb198/',
        title: 'Anno 2205',
        price: '1699',
        old: '1999',
        id: '16'
    },
    {
        link: 'http://gamazavr.ru/product/14687288/',
        image: 'http://gamazavr.ru/media/products/profile/23758/198_89.jpg/thumb198/',
        title: 'Anno 2205. Gold Edition',
        price: '2499',
        old: '2999',
        id: '17'
    },
    {
        link: 'http://gamazavr.ru/product/14685944/',
        image: 'http://gamazavr.ru/media/products/profile/22870/198_89.jpg/thumb198/',
        title: 'Assassin’s Creed: Syndicate',
        price: '1699',
        old: '1999',
        id: '18'
    },
    {
        link: 'http://gamazavr.ru/product/14685946/',
        image: 'http://gamazavr.ru/media/products/profile/22874/198_89.jpg/thumb198/',
        title: 'Assassin’s Creed: Syndicate. Gold Edition',
        price: '2999',
        old: '3299',
        id: '19'
    }
];

/*
 link - url to game
 image - url to preview image
 title - name of game
 price - current price
 old - old price
 */