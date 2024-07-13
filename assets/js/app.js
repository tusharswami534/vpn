const navbarlinks = () => {
    document.getElementById("nav-btn").classList.toggle("show-nav")
    document.body.classList.toggle("overflow-hidden")
    document.getElementById("ROT-1").classList.toggle("rotated")
    document.getElementById("ROT-2").classList.toggle("rotated-2")
    document.getElementById("d-n").classList.toggle("bg-transparent")

}
document.querySelector("#basicToastBtn").onclick = function () {
    new bootstrap.Toast(document.querySelector('#basicToast')).show();
}
document.querySelector("#basicToastBtn-2").onclick = function () {
    new bootstrap.Toast(document.querySelector('#basicToast-2')).show();
}
document.querySelector("#basicToastBtn-3").onclick = function () {
    new bootstrap.Toast(document.querySelector('#basicToast-3')).show();
}

const preloader = document.getElementById("loder");
function loding() {
    preloader.style.display = "none";
}
const navbtn = () => {
    document.getElementById("nav-menu").classList.toggle("show-nav")
    document.body.classList.toggle("overflow-hidden")
}


$(".sliderbox").slick({
    dots: true,
    infinite: true,
    speed: 300,
    nextArrow: ".next",
    prevArrow: ".prev",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                dots: true,
            }
        }
    ]
});
