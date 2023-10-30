const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

var count = 1;

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function changeImage() {
    var img = document.getElementById('change-image');
    switch(count){
        case 0: 
            img.src = 'images/sidel.jpg';
            count++;
            break;
        case 1: 
            img.src = 'images/CCpp.jpg';
            count++;
            break;
        case 2: 
            img.src = 'images/foule.png';
            count++;
            break;

        case 3:
            img.src = 'images/robots.jpg';
            count=0;
            break;
        default:
            img.src = 'images/sidel.png';
            count=0;
    }
  }
