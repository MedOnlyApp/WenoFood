const welcome_panel = document.getElementById("welcome_id")
const img_1 = document.querySelector(".img-1")
const img_2 = document.querySelector(".img-2")

let images = ["../static/img/pizza-png.png", "../static/img/burger-png.png", "../static/img/pizza-2-png.png", "../static/img/double-burger-png.png"];
let angle = 0
let angle_2 = 0
let angle_3 = 0
let i = 0
const interval = setInterval(() => {
    angle += 190
    welcome_panel.children[1].style.transform = `rotate(${angle}deg)`
    
    setTimeout(() => {
        angle -= 15;
        welcome_panel.children[1].style.transform = `rotate(${angle}deg)`;
    }, 1500); // wait 0.5s

    setTimeout(() => {
        angle += 5;
        welcome_panel.children[1].style.transform = `rotate(${angle}deg)`;
    }, 1600); // wait another 0.5s    
    

    if ( i == 4 )
        i = 0

    // console.log(i)
    if ( i % 2 == 0 )
    {
        img_2.src = images[i]
    } else {
        img_1.src = images[i]
    }

    if ( i == 0 || i == 2 )
    {
        angle_2 += 360
        img_2.style.transform = `rotate(${angle_2+180}deg)`
    }
    
    i++
}, 4000)