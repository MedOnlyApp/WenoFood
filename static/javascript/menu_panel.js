

const burger_list = ["../static/img/cheese-burger.png", "../static/img/double-cheese-burger.png", "../static/img/chicken-burger.png", "../static/img/chicken-burger.jpg"]
const sandwich_list = ["../static/img/sandwich-dinde.jpeg", "../static/img/sandwich-escalop.png", "../static/img/sandwich-mixte.jpg", "../static/img/sandwich-saucisse.jpg", "../static/img/sandwich-thon.jpg", "../static/img/sandwich-viande-hachée.jpg"]
const panini_list = ["../static/img/panini-3.jpg", "../static/img/panini-2.jpg", "../static/img/panini-3.jpg"]
const tacos_list = ["../static/img/tacos-XL-XXL.png", "../static/img/tacos-viande-hachée-1.jpg", "../static/img/tacos-dinde-1.jpg", "../static/img/tacos-escalope.jpg", "../static/img/tacos-mixte.png", "../static/img/tacos-saucisse.jpeg"]
const tacos_gratine_list = []
const pasticco_list = ["../static/img/pasticco-1.jpg", "../static/img/pasticco-2.jpg"]
const plat_list = []
const salad_list = ["../static/img/salad-fruit.jpg", "../static/img/salade-niçoise.png"]
const jus_list = ["../static/img/jus-fruit.jpg", "../static/img/jus-d'avocat.jpg", "../static/img/jus-d'orange.jpg"]
const drinks_list = ['../static/img/drinks-large.jpg', '../static/img/drinks-canned.jpg', '../static/img/drinks-medium.jpg']

const burger_img = document.getElementById("burger-img-id")
const sandwich_img = document.getElementById("sandwich-img-id")
const panini_img = document.getElementById("panini-img-id")
const tacos_img = document.getElementById("tacos-img-id")
const tacos_gratine_img = document.getElementById("tacos-gratine-img-id")
const plat_img = document.getElementById("plat-img-id")
const pasticco_img = document.getElementById("pasticco-img-id")
const salad_img = document.getElementById("salad-img-id")
const jus_img = document.getElementById("jus-img-id")
const drinks_img = document.getElementById("drinks-img-id")

let index = 0

setInterval(() => {
    burger_img.style.opacity = "0"
    sandwich_img.style.opacity = "0"
    panini_img.style.opacity = "0"
    tacos_img.style.opacity = "0"
    // tacos_gratine_img.style.opacity = "0"
    // plat_img.style.opacity = "0"
    pasticco_img.style.opacity = "0"
    salad_img.style.opacity = "0"
    jus_img.style.opacity = "0"
    drinks_img.style.opacity = "0"
    
    setTimeout(() => {
        burger_img.src = burger_list[index%4]
        sandwich_img.src = sandwich_list[index%6]
        panini_img.src = panini_list[index%3]
        tacos_img.src = tacos_list[index%6]
        // tacos_gratine_img.src = tacos_gratine_list[index%4]
        // plat_img.src = plat_list[index%4]
        pasticco_img.src = pasticco_list[index%2]
        salad_img.src = salad_list[index%2]
        jus_img.src = jus_list[index%3]
        drinks_img.src = drinks_list[index%3]
        
        burger_img.style.opacity = "1"
        sandwich_img.style.opacity = "1"
        panini_img.style.opacity = "1"
        tacos_img.style.opacity = "1"
        // tacos_gratine_img.style.opacity = "1"
        // plat_img.style.opacity = "1"
        pasticco_img.style.opacity = "1"
        salad_img.style.opacity = "1"
        jus_img.style.opacity = "1"
        drinks_img.style.opacity = "1"
    }, 300)
    index++
}, 3000)




