import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {  // Ajusta el valor según cuando quieras que el cambio ocurra
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
};
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const toastTrigger = document.getElementById('toastConfirmacionBtn')
const toastLiveExample = document.getElementById('toastConfirmacion')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}