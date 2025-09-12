const delivery_panel = document.getElementById("delivery_id")
const order_delivery_button = document.getElementById("order-delivery-button")
const order_delivery_button_span = document.getElementById("order-delivery-button-span")
const glovo_guy = document.getElementById("glovo-guy")
const glovo_logo = document.getElementById("glovo-logo")



let delivery_animation = setInterval(() => {
    order_delivery_button_span.classList.add('circle')
    order_delivery_button_span.style.top = `50%`
    order_delivery_button_span.style.left = `50%`

    setTimeout(() => order_delivery_button_span.classList.remove('circle'), 700)

    setTimeout(() => {

        if (window.innerWidth > 1020) {
            glovo_logo.style.top = "30px"
            glovo_guy.style.opacity = "1"
            glovo_guy.style.top = "40%"
            
            setTimeout(() => {
                glovo_guy.style.right = "-100%"
                
                setTimeout(() => {
                    glovo_guy.style.opacity = "0"
                    glovo_logo.style.top = "45%"
                    glovo_guy.style.top = "-100%"
                    glovo_guy.style.right = "13vw"
                }, 1000)
            }, 2500)
        }
        else {
            glovo_logo.style.top = "0"
            glovo_guy.style.opacity = "1"
            glovo_guy.style.top = "40%"
            
            setTimeout(() => {
                glovo_guy.style.right = "-100%"
                
                setTimeout(() => {
                    glovo_guy.style.opacity = "0"
                    glovo_logo.style.top = "20%"
                    glovo_guy.style.top = "-100%"
                    glovo_guy.style.right = "13vw"
                }, 1000)
            }, 2500)
        }
    }, 1000)
}, 7500)


