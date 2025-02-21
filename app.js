window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu")

    menu.addEventListener("click", e => {
        document.querySelector("body").classList.toggle("active")
        if(menu.className.includes("close")){
            menu.classList.replace("close", "open")
            menu.innerHTML = `<i class="fas fa-x"></i>`
        }
        else{
            menu.classList.replace("open", "close")
            menu.innerHTML = `<i class="fas fa-bars"></i>`
        }
    })
})