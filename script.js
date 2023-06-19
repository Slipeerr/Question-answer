let click = document.querySelector('#clickButton')
let menu = document.querySelector('.menu')
function setActiveMenu() {
    menu.classList.toggle('active-menu')
}
click.addEventListener('click', setActiveMenu)