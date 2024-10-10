// Filter JS

$(document).ready(function () {
    $(".filterItem").click(function () {
        const value = $(this).attr("data-filter")
        if (value == 'Tudo') {
            $(".postBox").show("1000");
        }
        else {
            $(".postBox").not("." + value).hide("1000");
            $(".postBox").filter("." + value).show("1000");
        }
    })
})

// add active to btn

$('.filterItem').click(function () {
    $(this).addClass("activeFilter").siblings().removeClass("activeFilter");
});

// Header Backgroudn

let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
})

// GSAP
gsap.from('.homeTitle', 1.5, {opacity: 0, y: 150, delay: .1})
gsap.from('.homeSubtitle', 1.8, {opacity: 0, x: -100, delay: .8})
gsap.from('.postFilter', 1.5, {opacity: 0, y: 150, delay: .1})
gsap.from('.post', 1.8, {opacity: 0, x: -100, delay: .1})