// Javascript content for mobile menu actions
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuButton = document.getElementById('menuButton');
const mobileMenuButtonClose = document.getElementById('menuButtonClose');
let open = false;

mobileMenuButton.onclick = function() {
    if (open == false) {
        open = true;
        mobileMenu.classList.add('open')
    }
}

mobileMenuButtonClose.onclick = function() {
    if (open == true) {
        open = false;
        mobileMenu.classList.remove('open')
    }
}