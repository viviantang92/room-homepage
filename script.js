const toggleImg = document.querySelector('.toggle-img');
const toggleBtn = document.querySelector('.toggle-btn');


toggleBtn.addEventListener("click", ()=> {
    if (toggleImg.getAttribute('src') === './images/icon-hamburger.svg') {
        toggleImg.setAttribute('src','./images/icon-close.svg')
        document.querySelector('nav').classList.toggle('active')
    } else {
        toggleImg.setAttribute('src', './images/icon-hamburger.svg')
        document.querySelector('nav').classList.toggle('active')

    }
});