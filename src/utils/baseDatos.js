const baseDatos = [
    {
        category:10,
        id:1,
        name:"Iphone 7",
        description:"Plus 128 GB Color Black",
        quantity:15,
        precie: 109000,
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_695065-MLA49737477253_042022-F.webp" 
    },
    {
        category:10,
        id:2,
        name:"Iphone 8",
        description:"64 GB rosa",
        quantity:15,
        precie: 144999,
        image:"https://http2.mlstatic.com/D_NQ_NP_770422-MLA50638694136_072022-V.jpg" 
    },
    {
        category:10,
        id:3,
        name:"Iphone X",
        description:"Plus 128 GB gris",
        quantity:8,
        precie: 229000,
        image:"https://i.pinimg.com/originals/42/98/74/4298741daed485a38b400f2ef69098f5.jpg"
    },
    {
        category:10,
        id:4,
        name:"Iphone 11 Pro",
        description:"128 GB negro",
        quantity:8,
        precie:231999,
        image:"https://falabella.scene7.com/is/image/Falabella/14673166_3?wid=800&hei=800&qlt=70"
    },
    {
        category:10,
        id:5,
        name:"Iphone 12 pro",
        description:"128 GB",
        quantity:12,
        precie:439990,
        image:"https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/iphone_12_pro_iphone_12_iphone_11_battery_life.jpg"
    },
    {
        category:10,
        id:6,
        name:"Iphone 13",
        description:"128GB color azul",
        quantity:18,
        precie:549990,
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_619667-MLA47781882790_102021-F.webp"
    },
    {
        category:10,
        id:7,
        name:"Iphone 13 pro",
        description:"128 GB ",
        quantity:5,
        precie:620990,
        image:"https://www.apple.com/newsroom/images/product/iphone/geo/Apple_HowToBuy_iPhone-13-Pro_GEO_09162021_carousel.jpg.large.jpg"
    },
    {
        category:10,
        id:8,
        name:"Iphone 14",
        description:"128 GB",
        quantity:4,
        precie:669990,
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_651103-MLA51592865768_092022-F.webp"
    },
    {
        category:10,
        id:9,
        name:"Apple iPad 9",
        description:"64 ram color gris",
        quantity:6,
        precie:185599,
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_711191-MLA47871333065_102021-F.webp",
    },
    {
        category:15,
        id:10,
        name:"Samsung Galaxy A51",
        description:" color negro 128 GB",
        quantity:15,
        precie:105954,
        image:"https://www.corning.com/content/dam/corning/microsites/csm/gorillaglass/Samsung/CGG_Samsung_galaxy_a51.jpg"
    },
    {
        category:15,
        id:11,
        name:"Samsung Galaxy A53",
        description:"5G 128GB awesome black 6 GB RAM",
        quantity:20,
        precie:122990,
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_761209-MLA50262524021_062022-F.webp"
    },
    {
        category:15,
        id:12,
        name:"Samsung Galaxy A71",
        description:"128gb 6 gb Ram, color Prism Crush silver",
        quantity:20,
        precie:122990,
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_988809-MLA46771718468_072021-F.webp"
    },
    {
        category:15,
        id:13,
        name:"Samsung Galaxy A03",
        description:"color negro 64 GB",
        quantity:18,
        precie:40290,
        image:"https://images.fravega.com/f300/727bb4eab2ce4c20131bde63bab71b34.jpg.webp"
    },
    {
        category:15,
        id:14,
        name:"Samsung Galaxy A23",
        description:"color celeste 64 GB 4ram con funda protectora",
        quantity:10,
        precie:67201,
        image:"https://m.media-amazon.com/images/I/71mReSZh9TL._AC_SS450_.jpg"
    },
    {
        category:15,
        id:15,
        name:"Samsung Galaxy A33",
        description:"5g 128 Gb Awesome White 6GB ram",
        quantity:15,
        precie:84999,
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_686525-MLA50999928890_082022-F.webp"
    },
    {
        category:15,
        id:16,
        name:"Samsung Galaxy S21",
        description:"FE 5G color oliva, 128 GB ",
        quantity:13,
        precie:149497,
        image:"https://images.fravega.com/f500/9aaf9888e9e0cdb0cd6b21165f859f16.jpg"
    },
    {
        category:15,
        id:17,
        name:"Samsung Galaxy S22",
        description:"8gb ram 128 gb Phantom Black",
        quantity:20,
        precie:215999,
        image:"https://http2.mlstatic.com/D_NQ_NP_979796-MLA49312613599_032022-O.webp"
    },
    {
        category:15,
        id:18,
        name:"Galaxy Zfold4",
        description:"Phantom Black 256 GB",
        quantity:8,
        precie:380274,
        image:"https://shop.jtglobal.com/wp-content/uploads/2021/08/samsung-galaxy-z-fold3-phantom-black-433x423.jpg"
    },
    {
        category:5,
        id:19,
        name:"Motorola Moto G71",
        description:"Xt2169-1 128GB ram 6gb 5G ",
        quantity:10,
        precie:55999,
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_612111-MLA49646168897_042022-F.webp"
    },
    {
        category:5,
        id:20,
        name:"Motorola Moto E20",
        description:"color azul 32GB 4G ",
        quantity:8,
        precie:37499,
        image:"https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/2/0/2021_aruba_basic-pack_coastal_blue_frontside_1.png"
    },
    {
        category:5,
        id:21,
        name:"Huawei P30",
        description:"color azul 128 GB",
        quantity:6,
        precie:440999,
        image:"https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p30/P30_skyblue.png"
    },
    {
        category:5,
        id:22,
        name:"Alcatel 1 Ultra",
        description:"32GB 4ram color black",
        quantity:10,
        precie:21999,
        image:"https://tienda.movistar.com.ar/media/catalog/product/a/l/alcatel1-ultra-frente.png"
    },
    {
        category:5,
        id:23,
        name:"Xiaomi Redmi Note 9",
        description:"32GB color azul",
        quantity:20,
        precie:38999,
        image:"https://ar.celulares.com/fotos/xiaomi-redmi-note-9-86489-g.jpg"
    },
    {
        category:5,
        id:24,
        name:"Xiaomi Redmi 10 Dual",
        description:"blanco sim 4 ram 64GB ",
        quantity:5,
        precie:60700,
        image:"https://http2.mlstatic.com/D_NQ_NP_992125-MLA51459868338_092022-O.webp"
    },
    {
        category:5,
        id:25,
        name:"Huawei P20 lite gama alta",
        description:"32gb 4gb ram color negro",
        quantity:15,
        precie:31000,
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_694552-MLA42586556580_072020-F.webp"
    },
    {
        category:5,
        id:26,
        name:"Motorola Edge",
        description:"256Gb 6 ram gris",
        quantity:8,
        precie:249800,
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_772446-MLA46163631945_052021-F.webp"
    },
    {
        category:5,
        id:27,
        name:"Huawei Mate 30 Pro",
        description:"256GB purpura cosmico 8GB ram",
        quantity:12,
        precie:498999,
        image:"https://http2.mlstatic.com/D_NQ_NP_2X_611173-MLA42072676350_062020-F.webp"
    }
]
export default baseDatos;