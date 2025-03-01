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

    gsap.registerPlugin(ScrollTrigger)
    

    const tlIntro = gsap.timeline({defaults: {ease: "power3.out", duration: .75}})

    tlIntro.fromTo(".logo", {y: '100%', opacity: 0}, {y: 0, opacity:1, duration: 1, delay: .5
    })
    tlIntro.fromTo(".hero-info img", {y: '100%', opacity: 0}, {y: 0, opacity:1, duration: 1}, '<50%')
    tlIntro.fromTo(".hero-info h1", {y: '100%', opacity: 0}, {y: 0, opacity:1, duration: 1},'<50%')
    tlIntro.fromTo(".hero-info p", {y: '100%', opacity: 0}, {y: 0, opacity:1, duration: 1})
    tlIntro.fromTo(".hero-info button", {y: '100%', opacity: 0}, {y: 0, opacity:1, duration: 1},'<50%')
    tlIntro.to('.hero', {scrollTrigger: {
        trigger: '.hero',
        start: "0",
        pin: true,
        pinSpacing: false,
        end: "100%",
        scrub: 1
    }})


    const tlcomment = gsap.timeline({
        scrollTrigger: {
            trigger: ".cmt",
            start: "0%",
            pin: true,
            pinSpacing: false,
            end: "100%",
            scrub: 1,
        }
    })

    const tlGallery = gsap.timeline({
        scrollTrigger: {
            trigger: ".gal-1",
            start: "-30%",
            pin: true,
            pinSpacing: false,
            end: "100%",
            scrub: 1,
        }
    })

    tlGallery.to(".gal-1", {x: "-100%"})
    tlGallery.to(".gal-2", {x: "100%"}, "<")
    tlGallery.to(".gal-3", {x: "-100%"}, "<")
})