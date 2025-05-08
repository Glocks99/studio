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
    

    // const tlIntro = gsap.timeline({defaults: {ease: "power3.inOut", duration: 1.5}})
    // tlIntro.to('.hero', {scrollTrigger: {
    //     trigger: '.hero',
    //     start: "20%",
    //     pin: true,
    //     pinSpacing: false,
    //     end: "80%",
    //     scrub: 1
    // }})

    // tlIntro.fromTo(".hero-info img", {y: '100%', opacity: 0}, {y: 0, opacity:1})
    // tlIntro.fromTo(".hero-info h1", {y: '100%', opacity: 0}, {y: 0, opacity:1},'<50%')
    // tlIntro.fromTo(".hero-info p", {y: '100%', opacity: 0}, {y: 0, opacity:1},'<50%')
    // tlIntro.fromTo(".hero-info button", {y: '100%', opacity: 0}, {y: 0, opacity:1},'<50%')
    // tlIntro.fromTo(".logo", {y: '100%', opacity: 0}, {y: 0, opacity:1, duration: 1, delay: .5
    // },'<50%')
    


    // const tlcomment = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".cmt",
    //         start: "0 0",
    //         pin: true,
    //         pinSpacing: false,
    //         end: "100%",
    //         scrub: 1,
    //     }
    // })


    // tlcomment.to(".cmt h1, .cmt p", {opacity: 0, duration: 1.5})

    const tlGallery = gsap.timeline({
        scrollTrigger: {
            trigger: "#gallery",
            start: "-30%",
            end: "90%",
            pin: true,
            pinSpacing: false,
            scrub: 1,
        }
    })

    // tlGallery.from('.gal-cont h1', {yPercent: -500,fontSize: "3rem"})
    tlGallery.to(".gal-1", {x: "-100%", opacity: 0}, "<")
    tlGallery.to(".gal-2", {x: "100%", opacity: 0}, "<")
    tlGallery.to('.gal-cont h1', {opacity: 0},'<')
    tlGallery.to(".gal-3", {x: "-100%", opacity: 0}, "<")

    const tlCeo = gsap.timeline({
        scrollTrigger: {
            trigger: "#ceo",
            start: "-30%",
            end: "20%",
            scrub: 2,
        }
    })
    
    tlCeo.from(".ceo-1", {x: "-100%"})
    tlCeo.from(".ceo-2", {x: "100%"},'<')
})

