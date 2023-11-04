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
    var img = document.getElementById('image_school');
    var title=document.getElementById('title_school');
    var sub=document.getElementById('sub_school');
    switch(count){
        case 0: 
            img.src = 'images/looking.jpg';
            title.innerText = 'Looking for an internship';
            sub.innerText='I am currently looking for an internship starting in April 2023!';
            count++;
            break;
        case 1: 
            img.src = 'images/revensburger.jpg';
            title.innerText='Working at Ravensburger';
            sub.innerText='During my summer holidays, I worked as a salesman/animator at Ravensburger';
            count++;
            break;
        case 2: 
            img.src = 'images/web.jpg';
            title.innerText='Web development';
            sub.innerText='I am trying to learn web development on my own, starting with this portfolio!'
            count=0;
            break;
        default:
            img.src = 'images/looking.png';
            title.innerText = 'Looking for and internship';
            sub.innerText='I am currently looking for an internship starting in April 2023!';
            count=0;
    }
  }


window.onscroll = function() {fillOnScroll()};

function fillOnScroll() {
  var remplissagefr = document.getElementById("remplissagefr");
  var remplissageall = document.getElementById("remplissageall");
  var remplissageang = document.getElementById("remplissageang");
  var scrollPos = document.documentElement.scrollTop;
  var windowHeight = window.innerHeight;
  var fullHeight = document.documentElement.scrollHeight;

  if (scrollPos > fullHeight - windowHeight - 500) { // Vous pouvez ajuster la position de déclenchement ici
    remplissagefr.style.width = "100%";
    remplissageall.style.width = "40%";
    remplissageang.style.width = "85%";
  }
}