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
